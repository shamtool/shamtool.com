<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
</script>

<header>
	<Navbar />
</header>

<main class="pt-5">
	<slot />
</main>

<footer>
</footer>
