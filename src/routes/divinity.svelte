<script lang="ts">
	import Main from '$lib/components/Main.svelte';
	import MapCardContainer from '$lib/components/MapCardContainer.svelte';
	import MapCard from '$lib/components/MapCard.svelte';
	import { title } from '$lib/stores';

	$title = 'Divinity';

	// TODO: temp
	const maps = [
		{
			mapCode: '@5344354',
			author: 'Dukeonkled',
			image: 'https://i.imgur.com/oioYIzH.png'
		},
		{
			mapCode: '@68656456',
			author: 'Strawberry#6091',
			image: 'https://i.imgur.com/oioYIzH.png'
		},
		{
			mapCode: '@5344354',
			author: 'Dukeonkled',
			image: 'https://i.imgur.com/oioYIzH.png'
		},
		{
			mapCode: '@68656456',
			author: 'Strawberry#6091',
			image: 'http://i.imgur.com/wITlW8G.png'
		},
		{
			mapCode: '@5344354',
			author: 'Dukeonkled',
			image: 'https://i.imgur.com/oioYIzH.png'
		},
		{
			mapCode: '@68656456',
			author: 'Strawberry#6091',
			image: 'http://i.imgur.com/wITlW8G.png'
		}
	];

	function fetchProps(mapCode: string) {
		// TODO: tmp
		return {
			Difficulty: 7,
			Category: 2,
			Wind: 6.9
		};
	}
</script>

<Main>
	<h3 class="text-center">Divinity</h3>
	<MapCardContainer>
		{#each maps as cardInfo}
			<MapCard {...cardInfo} fetchProps={() => fetchProps(cardInfo.mapCode)} />
		{/each}
	</MapCardContainer>
</Main>
