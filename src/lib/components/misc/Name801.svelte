<script lang="ts">
    export let name: string;
    export let ensureTag = false;
    /**
     * The type of format.
     */
    export let type: "smallTag" = "smallTag";

    let [_, frontName, tag] = name.match(/^(.*?)#?(\d*)$/m);

    if (ensureTag && !tag) tag = "0000";
</script>

<div class="inline-block align-text-bottom">
    {#if type === "smallTag"}
        {frontName}{#if tag}<span class="text-xs">#{tag}</span>{/if}
    {/if}
</div>
