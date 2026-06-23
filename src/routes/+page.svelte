<script lang="ts">
	import Greeting from './Greeting.svelte';

	let name = $state('John');
	let status: 'OPEN' | 'CLOSED' = $state('OPEN');

	let full_name = $derived(name + ' ' + 'Doe');

	function onclick() {
		status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
	}
</script>

<Greeting {name} />

<h2>{full_name}</h2>

<input type="text" bind:value={name} />

<p>The store is now {status}</p>
<button {onclick}>Toggle status</button>
