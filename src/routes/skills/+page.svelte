<script context="module" lang="ts">
	import SkillCard from '$lib/skillCard/SkillCard.svelte';
	import { Category, technologies, type Technology } from './technology/index';

	export const prerender = true;
	const base: Partial<Record<Category, Technology[]>> = {};

	const groupedTechnology = Object.entries(
		technologies.reduce((acc, next) => {
			next.categories.forEach((category) => {
				if (acc[category] === undefined) {
					acc[category] = [];
				}
				acc[category]!.push(next);
			});
			return acc;
		}, base)
	);
	groupedTechnology.sort((a, b) => b[1].length - a[1].length);
	const nowTime = new Date().getTime();

	const sorted = (technologies: Technology[]): Technology[] => {
		const augTech = technologies.map((technology) => {
			const experienceTime = technology.experience.reduce(
				(a, b) => a + ((b.endDate?.getTime() || nowTime) - b.startDate.getTime()),
				0
			);
			return { ...technology, experienceTime };
		});
		augTech.sort((a, b) => {
			return b.experienceTime - a.experienceTime;
		});
		return augTech;
	};
</script>

<svelte:head>
	<title>Nick - Skills</title>
	<meta name="description" content="A categorized set of sortable skills" />
</svelte:head>

<div class="skills">
	<h1>Skills</h1>
	<p>
		Listed is a set of technologies & services I have used in the past, you can sort them or click
		them to know more about my use of them.
	</p>
	<p>
		This list is a work in progress, there may be unlisted tech or services and some usage may not
		be fully detailed.
	</p>
	<div>
		{#each groupedTechnology as [category, technologies]}
			<div class="categoryGroup">
				<a href={`skills#${category}`} name={category}>
					<h2>{category}</h2>
				</a>
				<div class="skillsList">
					{#each sorted(technologies) as technology}
						<SkillCard details={technology} />
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.skills {
		width: 100%;
	}

	p {
		text-align: center;
	}

	.categoryGroup {
		padding: 1rem 0;
	}

	.categoryGroup h2 {
		padding-bottom: 0.5rem;
	}

	.skillsList {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, 300px);
		gap: 1rem;
		justify-content: space-between;
	}
</style>
