<script lang="ts">
    import { Icon, Search } from "svelte-hero-icons";

    let searchDivElement: HTMLDivElement;
    let inputElement: HTMLInputElement;
    let isInputFocused = false;
</script>

<!-- Search bar -->
<!-- TODO: add a shadow h-->
<div class="hidden md:inline-flex">
    <div
        bind:this={searchDivElement}
        on:click={() => inputElement.focus()}
        class="flex items-center h-8 rounded-lg cursor-text focus-within:shadow-border-md focus-within:shadow-gray-400 bg-brown-700 text-gray-200 overflow-hidden"
    >
        <input
            bind:this={inputElement}
            on:focus={() => { isInputFocused = true }}
            on:blur={() => { isInputFocused = false }}
            class="search-input min-w-0 max-w-[6rem] w-full focus:max-w-[10rem] flex-1 text-sm pr-2"
            type="text"
            id="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search..."
        />
        <Icon src={Search} class="flex mr-2 h-5 w-5" ariaHidden />
    </div>
</div>

<!-- Search button for smaller widths -->
<div class="md:hidden">
    <button
        type="button"
        class="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-primary-lighter focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    >
        <span class="sr-only">Search</span>
        <Icon src={Search} class="h-6 w-6" ariaHidden />
    </button>
</div>

<style>
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
