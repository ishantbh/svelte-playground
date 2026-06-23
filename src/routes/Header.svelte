<script lang="ts">
	const { name }: { name: string } = $props();
</script>

<div>
	{#if name}
		<h1>{name}&apos;s form</h1>
	{/if}
</div>

<style>
	div {
		border-bottom: 1px solid red;
	}
</style>
