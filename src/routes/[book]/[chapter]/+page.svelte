<script>
    /** @type {import('./$types').PageData} */
    export let data;

    const params = data.params;
    const book = data.book[0];
    const chapter = data.chapter;

  </script>

  <h1>{book.title_short}</h1>
  <h2>Chapter {params.chapter}</h2>

  <article class="prose lg:prose-xl mx-auto">

    {#each chapter as verse}
      <p><sub>{verse.v}</sub>{verse.t}</p>
    {/each}
  </article>