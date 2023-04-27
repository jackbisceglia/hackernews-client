<script lang="ts">
	import type { Story } from '../routes/+page.svelte';

	export let story: Story;
	export let rank: number;

	const getFormattedTimeSince = (ms: number) => Math.floor(ms / (1000 * 60 * 60));
</script>

<div
	class="flex justify-start w-full h-full gap-2 p-5 my-4 transition-all duration-300 ease-in-out border-2 rounded-lg shadow-lg text-neutral-200 group hover:my-5 hover:scale-[101.5%] bg-coolmint-700 hover:bg-coolmint-700/20 hover:border-coolmint-700 border-coolmint-700"
>
	<p class="text-lg font-bold">{rank}.</p>
	<div class="flex flex-col gap-2">
		<div class="flex flex-col items-start gap-2 top md:flex-row md:items-center">
			<a
				href={`/item?id=${story.id}`}
				class="text-lg font-bold break-all sm:text-xl hover:underline self-baseline line-clamp-1"
				>{story.title}</a
			>
			{#if story.url}
				<a
					target="_blank"
					href={story.url}
					class="text-sm italic font-light break-all transition-colors duration-100 text-coolmint-400 hover:text-coolmint-500 line-clamp-1"
					>({story.url})</a
				>
			{/if}
		</div>
		<div class="flex flex-col bottom text-coolmint-400">
			<p><span class=" text-neutral-200">{story.score}</span> points</p>
			<p><span class=" text-neutral-200">{story.descendants}</span> comments</p>
			<p class="font-medium text-coolmint-400">
				posted by:
				{story.by}
				{getFormattedTimeSince(story.time_posted)} hr ago
			</p>
		</div>
	</div>
</div>
