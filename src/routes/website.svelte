<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>About Me</title>
	<meta name="description" content="About me" />
</svelte:head>

<div class="content">
	<h1>About This Website</h1>

	<p>
		I use my personal website to explore and learn different frontend technologies. Currently, the
		website is written with Sveltekit, I chose to learn Svelte as it has a proficiency for use in
		building faster static websites, perfect for my own.
	</p>
</div>

<style>
</style>
