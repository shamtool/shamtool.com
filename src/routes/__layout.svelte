<script>
    import Alert from "$lib/components/Alert.svelte";
    import Container from "$lib/components/Container.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import { title } from "$lib/stores";
    import "../app.css";

    let finalTitle = "";
    $: {
        finalTitle = "";
        if ($title) {
            finalTitle += $title + " – ";
        }
        finalTitle += "ShamTool";
    }
</script>

<svelte:head>
    <title>
        {finalTitle}
    </title>
</svelte:head>

<header>
    <Navbar />
</header>

<!-- TODO: rmv -->
<Container>
    <Alert>
        Keep your eyes peeled for something big! This site uses <a
            class="link"
            href="https://svelte.dev">Svelte</a
        > under the hood to bring you this content seamlessly.
    </Alert>
</Container>

<div class="pt-5">
    <slot />
</div>

<footer />
