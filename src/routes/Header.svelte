<script lang="ts">
	import { MyState } from './state.svelte';

	const { name }: { name: string } = $props();

	const myState = new MyState();
</script>

<div>
	<h1>{name ? name : 'User'}&apos;s form</h1>
	<!-- <button onclick={myState.up}>{myState.value}</button> -->
	<button onclick={() => myState.up()}>{myState.value}</button>
</div>

<style></style>
