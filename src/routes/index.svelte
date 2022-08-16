<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<img class="profile" alt="Profile" src="images/profile.jpg" />
	<div class="details">
		<h1>Nicholas Fitton</h1>
		<h2>Full-stack Developer</h2>
	</div>
	<div class="social-links">
		<a href="https://github.com/NickFitton">
			<img src="images/home/github.svg" alt="github link" />
		</a>
		<a href="https://twitter.com/NFittonDev">
			<img src="images/home/twitter.svg" alt="twitter link" />
		</a>
		<a href="https://www.linkedin.com/in/nicholas-fitton">
			<img src="images/home/linkedin.svg" alt="linkedin link" />
		</a>
		<a href="mailto:website@nfitton.com?subject=Mail from your site">
			<img src="images/home/email.svg" alt="email link" />
		</a>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		height: 100%;
	}

	h1,
	h2 {
		text-align: center;
	}

	section .details {
		padding: 1em;
		background: #2d2d2d;
	}

	.social-links {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		background: #2d2d2d;
		margin: 1em;
		gap: 1em;
		padding: 1em;
	}

	.social-links a {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
	}

	.social-links a img {
		height: 24px;
	}

	.profile {
		width: 25vh;
		border-radius: 50%;
		border-style: solid;
		border-width: 16px;
		border-color: #2d2d2d;
		margin: 8px;
	}
</style>
