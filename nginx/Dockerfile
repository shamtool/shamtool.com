FROM nginx:latest

# Path to your certbot conf-dir
ARG CERTBOT_CONF_PATH=/certbot-data/etc

# Link the mounted certbot-data volume to correct places
# - ./certbot-data/etc/:/etc/nginx/ssl/:ro

# Create subdirs if not already done
RUN mkdir -p ${CERTBOT_CONF_PATH}

# Symlink
RUN ln -s ${CERTBOT_CONF_PATH} /etc/nginx/ssl

# Copy conf
COPY ./conf /etc/nginx/conf.d

EXPOSE 80
EXPOSE 443
