<script lang="ts">
	import Header from './Header.svelte';

	let formState = $state({
		name: '',
		birthday: '',
		step: 0,
		error: ''
	});
</script>

<main>
	<Header name={formState.name}>
		<p>Hello</p>

		{#snippet secondChild(name)}
			<p>Second Child {name}</p>
		{/snippet}
	</Header>

	<p>Step: {formState.step + 1}</p>

	{@render formStep({ type: 'text', id: 'name', question: "What's your name" })}

	{#if formState.error}
		<p class="error">{formState.error}</p>
	{/if}
</main>

{#snippet formStep({ type, id, question }: { type: string; id: string; question: string })}
	<article>
		<div>
			<label for={id}>{question}</label>
			<input {type} {id} bind:value={formState[id]} />
		</div>
	</article>
{/snippet}

<style>
	.error {
		color: red;
	}
</style>
