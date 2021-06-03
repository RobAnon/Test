<script>

	let results = [];
	let searchTerm = '';

	async function searchForSomething(e) {
		try {
			const res = await fetch(`/search?term=${searchTerm}`);
			const data = await res.json();
			results = data.data;
		} catch (e) {
			console.log(e);
		}
	}

</script>

<main>
	<h1>James bro sdf!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<br>
	<br>
	<div class="search-block">
		<input type="text" placeholder="search" bind:value={searchTerm}>
		<button on:click={searchForSomething}>Search</button>
	</div>
	<div class="search-results">
		{#if results.length > 0}
			<p>There are some search results which are {results}</p>
		{:else}
			<p>No search results</p>
		{/if}
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>