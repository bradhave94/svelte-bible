<script>
    /** @type {import('./$types').PageData} */
    export let data;

    const params = data.params;
    const book = data.book[0];
    const chapter = data.chapter;

  </script>


      <p class="text-base font-semibold leading-7 text-indigo-600">{book.title_short}</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Chapter {params.chapter}</h1>
      {#each chapter as verse}
        <p class="mt-6"><sub>{verse.v}</sub>{verse.t}</p>
      {/each}

