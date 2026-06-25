<script lang="ts">
	import { createState } from './state.svelte';

	const { name }: { name: string } = $props();

	const myState = createState();
</script>

<div>
	<h1>{name ? name : 'User'}&apos;s form</h1>
	<!-- <button onclick={myState.up}>{myState.value}</button> -->
	<button
		onclick={() => {
			myState.value = 10;
		}}>{myState.value}</button
	>
</div>

<style></style>
