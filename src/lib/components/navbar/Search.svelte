<script lang="ts">
    import { Icon, Search } from "svelte-hero-icons";
    import SearchResult from "./SearchResult.svelte";

    let inputElement: HTMLInputElement;
    let isFocused: boolean;
    let searchQuery: string;

    function onInput() {}

    let forceShow = false;
    let forcedShow = "hidden";
    $: if (!isFocused) forceShow = false;
    $: forcedShow = forceShow ? "flex" : "hidden";
</script>

<!-- Search bar -->
<div
    class="{forcedShow} md:flex relative max-w-[8rem] w-full duration-75 focus-within:max-w-[16rem]"
>
    <div
        on:click={() => inputElement.focus()}
        class="flex flex-1 items-center h-8 rounded-lg cursor-text focus-within:shadow-border-md focus-within:shadow-gray-400 bg-brown-700 text-gray-200 overflow-hidden"
    >
        <input
            bind:this={inputElement}
            bind:value={searchQuery}
            on:focus={() => (isFocused = true)}
            on:blur={() => (isFocused = false)}
            class="search-input transition-all w-full text-sm pr-2"
            type="text"
            id="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search..."
        />
        <Icon src={Search} class="mr-2 h-5 w-5" ariaHidden />
    </div>
    {#if searchQuery && isFocused}
        <div class="absolute top-full mts-2 w-full"><SearchResult bind:query={searchQuery} /></div>
    {/if}
</div>

<!-- Search button for smaller widths -->
<div class="md:hidden">
    <button
        on:click={() => {forceShow = true; inputElement.focus()}}
        type="button"
        class="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-primary-lighter focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    >
        <span class="sr-only">Search</span>
        <Icon src={Search} class="h-6 w-6" ariaHidden />
    </button>
</div>

<style lang="postcss">
    /* Strip off all styles */
    .search-input,
    .search-input:focus {
        border: none;
        background: transparent;
        outline: none;
        box-shadow: none;
        outline-style: none;
    }

    .search-input::placeholder {
        @apply text-gray-400;
    }
</style>
