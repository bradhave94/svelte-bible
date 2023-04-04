

<article class="prose lg:prose-xl">
	<ul>
		{#each books as book}
		  <li>
			<a href="/{book.title_short.slugify()}">
				{book.title_short}
			</a>
		</li>
		{/each}
	  </ul>
</article>

<script>
    export let data;
    let { books } = data;
    $: ({ books } = data);
  </script>
