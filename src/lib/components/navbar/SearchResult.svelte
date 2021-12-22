<script lang="ts">
    export let query: string;
</script>

<div class="p-3 bg-brown-700 text-gray-200 shadow-lg rounded">
    <ul class="list-result space-y-4 items-center" role="listbox">
        <li>
            <div class="inline-block rounded-lg bg-primary-lighter px-3 text-sm">Search Map</div>
            {query}
        </li>
        <li>
            <div class="inline-block rounded-lg bg-primary-lighter px-3 text-sm">Search Author</div>
            {query}
        </li>
    </ul>
</div>

<style lang="postcss">
    .list-result > li {
        @apply truncate items-center;
    }
</style>
