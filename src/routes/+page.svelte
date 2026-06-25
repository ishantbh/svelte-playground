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

	function nextStep(id: string) {
		if (formState.answers[id]) {
			formState.step++;
			formState.error = '';
		} else {
			formState.error = 'Please fill the form input';
		}
	}

	// Will run onMount
	$effect(() => {
		console.log('on mounted');

		return () => {
			// when unmounted or destroyed
			// before effect re-runs
			console.log('on unmounted');
		};
	});
</script>

<main>
	<Header name={formState.answers.name} />

	{#if formState.step >= QUESTIONS.length}
		<p>Thank You!</p>
	{:else}
		<p>Step: {formState.step + 1}</p>
	{/if}

	<!-- question.id is the `key` here -->
	{#each QUESTIONS as question, index (question.id)}
		{#if formState.step === index}
			{@render formStep(question)}
		{/if}
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
		<button onclick={() => nextStep(id)}>Next</button>
	</article>
{/snippet}

<style>
	.error {
		color: red;
	}
</style>
