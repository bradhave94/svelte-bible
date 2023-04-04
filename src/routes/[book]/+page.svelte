<script>
  /** @type {import('./$types').PageData} */
  export let data;

  const params = data.params;
  const book = data.book[0];

</script>

<h1>{book.title_short}</h1>
{#each {length: book.chapters} as _, i}
  <a href="/{book.title_short.slugify()}/{i + 1}">{i+1}</a><br>
{/each}

