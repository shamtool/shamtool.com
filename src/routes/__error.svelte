<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				status,
				error
			}
		};
	}
</script>

<script>
	import Container from '$lib/components/Container.svelte';
	import { title } from '$lib/stores';
	import { onMount } from 'svelte';

	export let status;
	export let error;
	const dev = process.env.NODE_ENV === 'development';

	onMount(() => {
		$title = `${status}: ${error.message}`;
	});
</script>

<main>
	<Container>
		<h1>{status}</h1>

		<p>{error.message}</p>

		{#if dev && error.stack}
			<pre>{error.stack}</pre>
		{/if}
	</Container>
</main>
