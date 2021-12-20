<script>
	import Main from '$lib/components/Main.svelte';
	import { title } from '$lib/stores';

	$title = null;
</script>

<Main>
	<h1>Welcome to ShamTool</h1>
	<p>
		Keep your eyes peeled for something big! This site uses <a
			class="link"
			href="https://svelte.dev">Svelte</a
		> under the hood to bring you this content seamlessly.
	</p>
</Main>
