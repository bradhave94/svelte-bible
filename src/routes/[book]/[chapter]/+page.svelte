<script>
    /** @type {import('./$types').PageData} */
    export let data;

    const params = data.params;
    const book = data.book[0];
    const chapter = data.chapter;

  </script>

  <h1>{book.title_short}</h1>
  <h2>Chapter {params.chapter}</h2>

  {#each chapter as verse}
    {verse.t}<br>
  {/each}