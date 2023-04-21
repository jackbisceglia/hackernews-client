<script>
	import '../app.css';
</script>

<nav
	class="sticky top-0 z-10 w-full py-4 text-lg border-b sm:text-base bg-coolmint-800/40 border-coolmint-300/20 backdrop-blur-sm"
>
	<div class="flex items-center justify-start text-left px-8 sm:px-12 sm:max-w-screen-xl mx-auto">
		<h1 class="text-lg sm:text-xl font-bold text-coolmint-500">Hacker News</h1>
	</div>
</nav>
<main class="text-left px-5 py-4 sm:pt-8 sm:pb-20 sm:px-12 sm:max-w-screen-xl mx-auto">
	<slot />
</main>
<footer />
