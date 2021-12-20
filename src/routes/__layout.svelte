<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import { title } from '$lib/stores';
	import '../app.css';

	let finalTitle = "";
	$: {
		finalTitle = "";
		if ($title) {
			finalTitle += $title + " – ";
		}
		finalTitle += "ShamTool";
	};
</script>

<svelte:head>
	<title>
		{finalTitle}
	</title>
</svelte:head>

<header>
	<Navbar />
</header>

<main class="pt-5">
	<slot />
</main>

<footer />
