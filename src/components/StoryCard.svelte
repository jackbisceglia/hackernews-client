<script lang="ts">
	import type { Story } from '../routes/+page.svelte';

	export let story: Story;
	export let rank: number;

	const getFormattedTimeSince = (ms: number) => Math.floor(ms / (1000 * 60 * 60));
</script>

<div
	class="text-neutral-200 w-full flex my-4 justify-start h-full gap-2 p-5 transition-all duration-300 ease-in-out border-2 rounded-lg shadow-lg group hover:my-6 hover:scale-110 bg-coolmint-700 hover:bg-coolmint-700/20 hover:border-coolmint-700 border-coolmint-700"
>
	<p class="text-lg font-bold">{rank}.</p>
	<div class="flex flex-col gap-2">
		<div class="top flex gap-2 items-start flex-col md:flex-row md:items-center">
			<a
				href={`/item?id=${story.id}`}
				class="text-lg sm:text-xl font-bold hover:underline self-baseline break-all line-clamp-1"
				>{story.title}</a
			>
			{#if story.url}
				<a
					target="_blank"
					href={story.url}
					class="font-light text-coolmint-400 hover:text-coolmint-500 transition-colors duration-100 italic text-sm break-all line-clamp-1"
					>({story.url})</a
				>
			{/if}
		</div>
		<div class="bottom flex flex-col text-coolmint-400">
			<p><span class=" text-neutral-200">{story.score}</span> points</p>
			<p><span class=" text-neutral-200">{story.descendants}</span> comments</p>
			<p class="text-coolmint-400 font-medium">
				posted by:
				{story.by}
				{getFormattedTimeSince(story.time_posted)} hr ago
			</p>
		</div>
	</div>
</div>
