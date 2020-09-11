<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
body {
	height: 100%;
}

	main {
		max-width: 100%;
		background: #181818;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>