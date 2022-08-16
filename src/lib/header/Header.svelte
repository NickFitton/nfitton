<script lang="ts">
	import { page } from '$app/stores';

	type Link = {
		path: string;
		name: string;
	};
	const navLinks: Link[] = [
		{ path: '/', name: 'Home' },
		{ path: '/skills', name: 'Skills' },
		{ path: '/experience', name: 'Experience' },
		{ path: '/about', name: 'About Me' },
		{ path: '/website', name: 'About This Site' },
		{ path: '/NicholasFittonCV.pdf', name: 'CV' }
	];
</script>

<header>
	<nav>
		<ul>
			{#each navLinks as link}
				<li class:active={$page.url.pathname === link.path}>
					<a sveltekit:prefetch href={link.path}>{link.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		background: #2d2d2d;
		min-height: 4em;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		padding: 0 0.5rem;
		transition: border-bottom-width 0.1s linear;
		border-bottom: 0 solid #ffa200;
	}

	li:hover,
	li.active {
		border-bottom-width: 2px;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		color: var(--heading-color);
		font-weight: 400;
		text-decoration: none;
		/* padding: 0.25rem 0; */
	}
</style>
