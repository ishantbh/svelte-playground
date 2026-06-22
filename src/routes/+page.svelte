<script lang="ts">
	import Greeting from './Greeting.svelte';

	let name = $state('John');
	let status: 'OPEN' | 'CLOSED' = $state('OPEN');

	function onclick() {
		status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
	}
</script>

<Greeting {name} />

<input type="text" bind:value={name} />

<p>The store is now {status}</p>
<button {onclick}>Toggle status</button>
