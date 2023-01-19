import adapterStatic from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

const isGhPages = process.env.TO_GITHUB === "true";
const isStatic = isGhPages || process.env.IS_STATIC === "true";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess({
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

		paths: {
			// Deployment to GH-pages
			base: isGhPages ? '/shamtool.com' : '',
		},
	}
};

export default config;
