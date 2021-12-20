<script lang="ts">
	import { Icon, ChevronDown, ChevronUp } from 'svelte-hero-icons';
	import MapCardContainer from './MapCardContainer.svelte';

	export let mapCode: string;
	export let author: string;
	export let image: string;

	export let isExpanded = false;
	export let props: Record<string, any> = null;
	export let fetchProps: () => Record<string, any> = null;

	function onActivate() {
		isExpanded = !isExpanded;
	}
</script>

<!-- Style adapted from https://tailwindcomponents.com/component/full-responsive-video-cards (by amirrahman132132) -->
<div class="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
	<img class="w-full" src={image} alt="" />

	<!-- allow breaking to the next row -->
	<div class="flex flex-col sm:flex-row sm:flex-wrap pt-3 items-center">
		<div class="flex-1 desc px-3 text-gray-800">
			<a
				href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
				target="_new"
				class="title font-bold block cursor-pointer hover:underline">{mapCode}</a
			>
		</div>
		<div class="flex desc px-3 text-gray-800 text-sm">{author}</div>
	</div>

	<!-- disallow breaking for this -->
	<div class="mt-1 flex pt-1 p-3 items-center">
		<div class="flex-1 desc text-gray-800 -m-0.5">
			{#each new Array(1) as _, i}
				<!-- svelte-ignore a11y-invalid-attribute : TODO -->
				<a
					href="#"
					class="badge inline-flex whitespace-no-wrap m-0.5 bg-indigo-500 text-blue-100 rounded-full px-2 py-0.5 text-xs cursor-pointer text-gray-100"
					>Divinity</a
				>
			{/each}
		</div>
		<div class="flex desc text-gray-800">
			<button
				type="button"
				class="inline-flex p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary-lighter focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
				aria-controls="mobile-menu"
				aria-expanded="false"
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
</div>