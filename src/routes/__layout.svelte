<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
</script>

<header>
	<Navbar />
</header>

<main>
	<slot />
</main>

<footer>
</footer>
