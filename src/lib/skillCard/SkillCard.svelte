<script lang="ts">
	import type { Experience, Technology } from 'src/routes/skills/technology';
	import { DateTime, Duration } from 'luxon';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let details: Technology;
	const NO_DURATION = Duration.fromMillis(0, { numberingSystem: '' });

	const toAge = (experiences: Experience[]): string => {
		const duration = experiences
			.map(({ startDate, endDate }) => {
				if (!endDate || endDate.getTime() > new Date().getTime()) {
					return DateTime.now().diff(DateTime.fromJSDate(startDate), ['years', 'months']);
				}
				return DateTime.fromJSDate(endDate).diff(DateTime.fromJSDate(startDate), [
					'years',
					'months'
				]);
			})
			.reduce((acc, next) => acc.plus(next), NO_DURATION);

		return [
			duration.years > 0 ? `${duration.years}yr${duration.years > 1 ? 's' : ''}` : '',
			duration.months > 0
				? `${duration.months.toFixed()}mth${duration.months.toFixed() === '1' ? 's' : ''}`
				: null
		]
			.filter((duration) => duration !== '')
			.join(', ');
	};

	function handleClick() {
		dispatch('click');
	}
</script>

{#if details.experience.length !== 0}
	<div
		class="detailedSkill {details.inverted ? 'inverted' : ''}"
		style="background-color: {details.color}"
	>
		<div class="header">
			<div class="headerName">
				{#if !!details.icon}
					<img loading="lazy" src={details.icon} alt={details.name} />
				{/if}
				<h3>{details.name}</h3>
			</div>
			<span>{toAge(details.experience)}</span>
		</div>
		<div class="content" class:inverted={!!details.inverted}>
			<div class="summaryContent">
				<p>{details.experience[0].summary[0]}</p>
			</div>
			<div class="actions">
				<button on:click={handleClick}>learn more ></button>
			</div>
		</div>
	</div>
{:else}
	<div
		class="simpleSkill"
		class:inverted={!!details.inverted}
		style="background-color: {details.color}"
		on:click={handleClick}
	>
		{#if !!details.icon}
			<img loading="lazy" src={details.icon} alt={details.name} />
		{/if}
		<h3>{details.name}</h3>
	</div>
{/if}

<style>
	.detailedSkill {
		width: 300px;
		display: grid;
		grid-template-rows: auto 1fr;
		color: var(--primary-color);
	}
	.detailedSkill.inverted {
		color: var(--text-color);
	}

	.detailedSkill img {
		font-size: 20px;
		height: 1.5rem;
		min-width: 1.5rem;
	}

	.detailedSkill h3 {
		font-weight: 400;
		margin: 0;
	}

	.detailedSkill,
	.content {
		border-radius: 8px;
	}

	.summaryContent p {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.detailedSkill .header {
		padding: 0.5rem 1rem;
		display: flex;
		gap: 0.5rem;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;
	}

	.headerName {
		display: flex;
		gap: 0.5rem;
		flex-flow: row nowrap;
		align-items: center;
	}

	.detailedSkill .content {
		background: #fff;
		padding: 0.1rem 1rem;
	}

	.detailedSkill .content p {
		color: var(--primary-color);
	}
	.detailedSkill .content p:first {
		margin-top: 0;
		padding-top: 0;
	}
	.detailedSkill .content .actions {
		display: flex;
		flex-flow: row nowrap;
		justify-content: end;
	}
	.detailedSkill .content .actions button {
		background: unset;
		border: unset;
	}

	.simpleSkill {
		border-radius: 8px;
		width: 300px;
		cursor: pointer;
		gap: 1em;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.simpleSkill.inverted h3 {
		color: var(--text-color);
	}
	.simpleSkill h3 {
		font-size: 28px;
		font-weight: 400;
	}
	.simpleSkill img {
		height: 49px;
		min-width: 49px;
	}
</style>
