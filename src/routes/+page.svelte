<script context="module" lang="ts">
	export type Story = {
		id: `${string}-${string}-${string}-${string}-${string}`;
		type: 'story' | `${string}`;
		title: string;
		// hn_href: string;
		url: string;
		score: number;
		by: string;
		time_posted: number;
		descendants: number;
	};

	type StateType = {
		num_stories: number;
		all_story_ids: string[];
		stories: Story[];
		loading: boolean;
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	import Spinner from '../components/Spinner.svelte';
	import StoryCard from '../components/StoryCard.svelte';

	const STATE: StateType = {
		num_stories: 10,
		all_story_ids: [],
		stories: [],
		loading: true
	};

	const handleFetchNextPage = () => {
		STATE.num_stories += 10;
		fetchStories();
	};

	const fetchStories = async () => {
		const storyIdsToFetch = STATE.all_story_ids.slice(STATE.stories.length, STATE.num_stories);

		const paginated_stories: Story[] = await Promise.all(
			storyIdsToFetch.map(async (curr_id) => {
				const currRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${curr_id}.json`);
				const currStory = await currRes.json();

				return currStory;
			})
		);

		STATE.stories = [...STATE.stories, ...paginated_stories];
	};

	onMount(async () => {
		STATE.loading = true;
		const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
		const data = await res.json();

		STATE.all_story_ids = data;

		await fetchStories();
		STATE.loading = false;
	});
</script>

<head>
	<title>HN Client</title>
</head>
{#if !STATE.loading}
	{#each STATE.stories as p, index}
		<StoryCard story={p} rank={index + 1} />
	{/each}
	<button
		on:click={handleFetchNextPage}
		class="flex items-center gap-1 px-6 py-1 mx-auto my-1 font-bold transition-all duration-200 ease-in-out rounded-md bg-coolmint-700 text-coolmint-400 flex-start hover:bg-coolmint-500 hover:text-coolmint-800"
	>
		Load More
	</button>
{:else}
	<Spinner />
{/if}
