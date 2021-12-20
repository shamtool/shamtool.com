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
	import Alert from '$lib/components/Alert.svelte';
	import Main from '$lib/components/Main.svelte';
	import { title } from '$lib/stores';
	import { onMount } from 'svelte';

	export let status;
	export let error;
	const dev = process.env.NODE_ENV === 'development';

	onMount(() => {
		$title = `${status}: ${error.message}`;
	});
</script>

<Main>
	<h1>{status}</h1>

	<Alert type="error" dismissable={false}>
		<h5>{error.message}</h5>

		{#if dev && error.stack}
			<pre>{error.stack}</pre>
		{/if}
	</Alert>
</Main>
