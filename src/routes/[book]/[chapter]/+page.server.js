import { error } from '@sveltejs/kit';


/** @type {import('./$types').PageLoad} */
import { supabase } from "$lib/supabaseClient";

export async function load({ params }) {
  const book = await supabase.from("book_info").select().ilike('title_short', `%${params.book}%`)
  const chapter = await supabase.from("t_kjv").select().eq('b', book.data[0].order).eq('c', params.chapter)
  return {
    params: {
      book: params.book,
      chapter: params.chapter,
    },
	  book: book.data ?? [],
    chapter: chapter.data ?? [],
  }
}
