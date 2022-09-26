<script>
    import Alert from "$lib/components/Alert.svelte";
    import Main from "$lib/components/Main.svelte";
    import { title } from "$lib/stores";
    import { onMount } from "svelte";
    import { page } from '$app/stores';

    $: status = $page.status;
    $: error = $page.error;

    onMount(() => {
        $title = `${status}: ${error.message}`;
    });
</script>

<Main>
    <h1>{status}</h1>

    <Alert type="error" dismissable={false}>
        <span class="text-xl">{error.message}</span>

        <!--{#if error.stack}
            <pre>{error.stack}</pre>
        {/if}-->
    </Alert>
</Main>
