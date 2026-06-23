<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		name,
		secondChild,
		children
	}: {
		name: string;
		secondChild: Snippet;
		children: Snippet;
	} = $props();
</script>

<div>
	<h1>{name ? name : 'User'}&apos;s form</h1>

	{@render children()}

	<h3>{@render secondChild('Jane')}</h3>
</div>

<style></style>
