<script>
	import Greeting from './Greeting.svelte';

	let name = $state('John');
</script>

<Greeting {name} />

<input type="text" bind:value={name} />
