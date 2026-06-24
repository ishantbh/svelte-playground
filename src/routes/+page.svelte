<script lang="ts">
	import Header from './Header.svelte';

	let formState = $state({
		answers: {},
		step: 0,
		error: ''
	});

	const QUESTIONS = [
		{
			question: "What's your name?",
			id: 'name',
			type: 'text'
		},
		{
			question: "When's your birthday?",
			id: 'birthday',
			type: 'date'
		},
		{
			question: "What's your favorite color?",
			id: 'color',
			type: 'color'
		}
	];
</script>

<main>
	<Header name={formState.answers.name} />

	<p>Step: {formState.step + 1}</p>

	<!-- question.id is the `key` here -->
	{#each QUESTIONS as question (question.id)}
		{@render formStep(question)}
	{/each}

	{#if formState.error}
		<p class="error">{formState.error}</p>
	{/if}
</main>

{#snippet formStep({ type, id, question }: { type: string; id: string; question: string })}
	<article>
		<div>
			<label for={id}>{question}</label>
			<input {type} {id} bind:value={formState.answers[id]} />
		</div>
	</article>
{/snippet}

<style>
	.error {
		color: red;
	}
</style>
