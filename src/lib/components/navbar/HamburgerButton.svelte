<script lang="ts">
    import { Bars3, XMark } from "@steeze-ui/heroicons";
    import { Icon } from "@steeze-ui/svelte-icon";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let isOpen = false;

    function onActivate() {
        isOpen = !isOpen;
        dispatch(isOpen ? "open" : "close");
    }
</script>

<button
    type="button"
    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary-lighter focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    aria-controls="mobile-menu"
    aria-expanded="false"
    on:click={onActivate}
>
    <span class="sr-only">Open main menu</span>
    <Icon src={Bars3} class="block h-6 w-6" solid ariaHidden />
    {#if isOpen}
        <Icon src={XMark} class="block h-4 w-4" solid ariaHidden />
    {/if}
</button>
