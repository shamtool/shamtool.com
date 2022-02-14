import adapterStatic from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

const isGhPages = process.env.TO_GITHUB === "true";
const isStatic = isGhPages || process.env.IS_STATIC === "true";

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
		adapter: isStatic ? adapterStatic({
			pages: isGhPages ? 'build-gh' : 'build-static',
			assets: isGhPages ? 'build-gh' : 'build-static',
			fallback: null,
		}) : adapterNode({
			out: 'build',
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		paths: {
			// Deployment to GH-pages
			base: isGhPages ? '/shamtool.com' : '',
		},
	}
};

export default config;
