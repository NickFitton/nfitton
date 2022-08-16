<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<div class="layout">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	.layout {
		height: 100vh;
		display: flex;
		flex-flow: column nowrap;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		height: 100%;
		align-items: center;
		margin: 3rem 6rem;
		box-sizing: border-box;
	}
</style>
