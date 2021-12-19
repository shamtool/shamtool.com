import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const isGhPages = process.env.TO_GITHUB === "true";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			pages: isGhPages ? 'build-gh' : 'build',
			assets: isGhPages ? 'build-gh' : 'build',
			fallback: null
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				// !IMPORTANT so the icon data can be imported (as JSON)
				noExternal: ["svelte-hero-icons"],
			},

			// no import waterfalls in development
			optimizeDeps: {
				include: ["svelte-hero-icons"],
			},
		},

		paths: {
			// Deployment to GH-pages
			base: isGhPages ? '/shamtool.com' : '',
		},
	}
};

export default config;
