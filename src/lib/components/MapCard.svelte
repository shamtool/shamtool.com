<script lang="ts">
    import { Icon, ChevronDown, ChevronUp } from "svelte-hero-icons";
    import { slide } from "svelte/transition";
    import Name801 from "./misc/Name801.svelte";

    export let mapCode: string;
    export let author: string;
    export let image: string;

    export let isExpanded = false;
    export let props: Record<string, any> = null;
    export let fetchProps: () => Record<string, any> = null;

    function onActivate() {
        isExpanded = !isExpanded;
        if (!props) {
            // Fetch once and cache
            props = fetchProps();
        }
    }

    const mapCodeElId = "mapCode_" + ((Math.random() * 1000000) << 0).toString();
    const authorElId = "author_" + ((Math.random() * 1000000) << 0).toString();
    let mapCodeDivEl: HTMLDivElement;
    let authorDivEl: HTMLDivElement;

    function onMapCodeAuthorCopy(event: ClipboardEvent) {
        const sel = document.getSelection();
        console.log(sel);

        // Only format when both elements are selected in partial (at least)
        if (!sel.containsNode(mapCodeDivEl, true) || !sel.containsNode(authorDivEl, true)) return;

        const fragment = sel.getRangeAt(0).cloneContents();

        const selectedMapCode = fragment.getElementById(mapCodeElId).textContent;
        const selectedAuthor = fragment.getElementById(authorElId).textContent;

        event.clipboardData.setData("text", `${selectedAuthor} - ${selectedMapCode}`);
        event.preventDefault();
    }
</script>

<!-- Style adapted from https://tailwindcomponents.com/component/full-responsive-video-cards (by amirrahman132132) -->

<!-- Defines the grid -->
<div class="mb-10 m-2">
    <!-- The actual card -->
    <div
        class="shadow-lg rounded overflow-hidden border-gray-800 site-bg-secondary hover:shadow-lg hover:shadow-gray-400"
    >
        <!-- Clickable container -->
        <div
            type="link"
            class="cursor-pointer hover:text-gray-600 dark:hover:text-gray-200"
            aria-expanded={isExpanded}
            on:click={onActivate}
        >
            <img class="w-full" src={image} alt="" />
        </div>

        <!-- allow breaking to the next row -->
        <!-- Intercept copy and set formatted content in the clipboard -->
        <div
            class="flex flex-col sm:flex-row sm:flex-wrap pt-3 items-center"
            on:copy={onMapCodeAuthorCopy}
        >
            <div class="flex-1 px-3" bind:this={mapCodeDivEl} id={mapCodeElId}>
                <span class="font-bold">{mapCode}</span>
            </div>
            <div class="flex px-3 text-sm" bind:this={authorDivEl} id={authorElId}>
                <Name801 name={author} />
            </div>
        </div>

        <!-- disallow breaking for this -->
        <div class="mt-1 flex pt-1 p-3 items-center">
            <div class="flex-1 -m-0.5">
                {#each new Array(1) as _, i}
                    <!-- svelte-ignore a11y-invalid-attribute : TODO -->
                    <a
                        href="#"
                        class="badge inline-flex whitespace-no-wrap m-0.5 bg-indigo-600 rounded-full px-2 py-0.5 text-xs cursor-pointer text-gray-100"
                        >Divinity</a
                    >
                    <!-- svelte-ignore a11y-invalid-attribute : TODO -->
                    <a
                        href="#"
                        class="badge inline-flex whitespace-no-wrap m-0.5 bg-yellow-600 rounded-full px-2 py-0.5 text-xs cursor-pointer text-gray-100"
                        >Spiritual</a
                    >
                {/each}
            </div>

            <div class="flex desc">
                <button
                    type="button"
                    class="inline-flex p-2 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    aria-expanded={isExpanded}
                    on:click={onActivate}
                >
                    <span class="sr-only">Expand details</span>
                    {#if isExpanded}
                        <Icon src={ChevronDown} class="block h-4 w-4" solid />
                    {:else}
                        <Icon src={ChevronUp} class="block h-4 w-4" solid />
                    {/if}
                </button>
            </div>
        </div>

        {#if isExpanded && props}
            <hr class="w-9/12 m-auto site-border-subtle" />
            <!-- breaking to the next row -->
            <div class="flex flex-col p-3" transition:slide|local={{ duration: 200 }}>
                {#each Object.entries(props) as [name, value]}
                    <!-- disallow breaking for this -->
                    <div class="mt-1 flex items-center">
                        <div class="flex-1">
                            {name}
                        </div>
                        <div class="flex px-3 f-semibold">
                            {value}
                        </div>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>
