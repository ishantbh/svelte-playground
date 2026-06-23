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
	<Header name={formState.name} />

	<p>Step: {formState.step + 1}</p>

	{#if formState.step === 0}
		<div>
			<label for="name">Name</label>
			<input type="text" id="name" bind:value={formState.name} />
		</div>
		<button
			onclick={() => {
				if (formState.name !== '') {
					formState.step++;
					formState.error = '';
				} else {
					formState.error = 'Name is required';
				}
			}}>Next</button
		>
	{:else if formState.step === 1}
		<div>
			<label for="bday">Your Birthday</label>
			<input type="date" id="bday" bind:value={formState.birthday} />
		</div>
		<button
			onclick={() => {
				if (formState.birthday !== '') {
					formState.step++;
					formState.error = '';
				} else {
					formState.error = 'Birthday is required';
				}
			}}>Next</button
		>
	{/if}

	{#if formState.error}
		<p class="error">{formState.error}</p>
	{/if}
</main>

<style>
	.error {
		color: red;
	}
</style>
