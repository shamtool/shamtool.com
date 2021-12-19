<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { Icon, Search } from 'svelte-hero-icons';
	import { clickOutside } from 'svelte-use-click-outside';
	import { slide } from 'svelte/transition';
	import Container from './Container.svelte';
	import HamburgerButton from './HamburgerButton.svelte';

	const navigation = [
		{ name: 'Home', path: '/' },
		{ name: 'Categories', path: '/categories' },
		{ name: 'Divinity', path: '/divinity' },
		{ name: 'Spiritual', path: '/spiritual' }
	];

	/**
	 * Whether the mobile navbar is open.
	 */
	let isMobileOpen = false;
</script>

<nav class="bg-primary" use:clickOutside={() => (isMobileOpen = false)}>
	<Container>
		<div class="relative flex items-center justify-between h-16">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button-->
				<HamburgerButton bind:isOpen={isMobileOpen} />
			</div>
			<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex-shrink-0 flex items-center">
					<a
							href="{base}/"
							class="text-white block px-3 py-2 rounded-md text-base font-medium"
							aria-current="page">
					<!-- Compact -->
					<!-- TODO: design compact logo? -->
					<img
						class="block lg:hidden h-8 w-auto"
						src="{base}/shamtool.svg"
						alt="ShamTool"
					/>
					<!-- Full -->
					<img
						class="hidden lg:block h-8 w-auto"
						src="{base}/shamtool.svg"
						alt="ShamTool"
					/>
				</a>
				</div><!--div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
				-->
				<div class="hidden sm:flex sm:ml-6">
					<div class="flex space-x-4 m-auto">
						{#each navigation as { name, path }}
							{#if $page.path === path}
								<a
									href={base}{path}
									class="bg-primary-lighter text-white px-3 py-2 rounded-md text-sm font-medium"
									aria-current="page">{name}</a
								>
							{:else}
								<a
									href={base}{path}
									class="text-gray-300 hover:bg-primary-lighter hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>{name}</a
								>
							{/if}
						{/each}
					</div>
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<button
					type="button"
					class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
				>
					<span class="sr-only">Search</span>
					<Icon src={Search} class="h-6 w-6" solid ariaHidden />
				</button>
			</div>
		</div>
	</Container>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#if isMobileOpen}
		<div class="sm:hidden" id="mobile-menu" transition:slide>
			<div class="px-2 pt-2 pb-3 space-y-1">
				{#each navigation as { name, path }}
					{#if $page.path === path}
						<a
							href={base}{path}
							class="bg-primary-lighter text-white block px-3 py-2 rounded-md text-base font-medium"
							aria-current="page">{name}</a
						>
					{:else}
						<a
							href={base}{path}
							class="text-gray-300 hover:bg-primary-lighter hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							>{name}</a
						>
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</nav>
