<script>
    import { base } from "$app/paths";
    import Main from "$lib/components/Main.svelte";
    import { title } from "$lib/stores";

    $title = null;
</script>

<Main>
    <h3 class="text-center">Welcome to ShamTool</h3>
    <p class="text-center">
        Have a cookie!
        <img
            class="mt-6 m-auto animate-spin h-auto max-h-36"
            src="{base}/le-cookie.svg"
            alt="Le cookie"
        />
    </p>
</Main>
