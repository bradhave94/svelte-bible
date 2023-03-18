<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<article class="prose lg:prose-xl">
	<h1>Garlic bread with cheese: What the science tells us</h1>
	<p>
		For years parents have espoused the health benefits of eating garlic bread with cheese to
		their children, with the food earning such an iconic status in our culture that kids will
		often dress up as warm, cheesy loaf for Halloween.
	</p>
	<p>
		But a recent study shows that the celebrated appetizer may be linked to a series of rabies
		cases springing up around the country.
	</p>
	<!-- ... -->
</article>

<script>
    export let data;
    let { books } = data;
    $: ({ books } = data);
  </script>

  <ul>
    {#each books as book}
      <li>{book.title_short}</li>
    {/each}
  </ul>
