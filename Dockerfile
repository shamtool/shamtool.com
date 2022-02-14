FROM node:16-alpine as builder

RUN npm install -g pnpm

COPY . ./usr/app
WORKDIR /usr/app

RUN pnpm install --frozen-lockfile

# Export API host path to build
ARG VITE_API_HOST
ENV VITE_API_HOST=${VITE_API_HOST}

RUN pnpm run build
RUN pnpm prune --production

FROM node:16-alpine as runner
ENV NODE_ENV production

# Copy necessary build ouputs
COPY --from=builder /usr/app/package.json ./package.json
COPY --from=builder /usr/app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/build ./build

EXPOSE 3000

ENTRYPOINT ["node", "build"]
