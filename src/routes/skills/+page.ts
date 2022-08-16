import SkillCard from '$lib/skillCard/SkillCard.svelte';
import { Category, technologies, type Technology } from './technology';

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
