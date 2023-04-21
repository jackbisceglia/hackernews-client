<script>
	import '../app.css';
</script>

<nav
	class="sticky top-0 z-10 w-full py-4 text-lg border-b sm:text-base bg-coolmint-800/40 border-coolmint-300/20 backdrop-blur-sm px-32"
>
	<div class="flex items-center justify-between text-left px-8 sm:px-12 sm:max-w-screen-xl mx-auto">
		<h1 class="text-xl font-bold text-coolmint-500">Hacker News</h1>
	</div>
</nav>
<main class="text-left px-8 py-8 sm:pt-8 sm:pb-20 sm:px-12 sm:max-w-screen-xl mx-auto">
	<slot />
</main>
<footer />
