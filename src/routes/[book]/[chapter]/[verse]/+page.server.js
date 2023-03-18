import { error } from '@sveltejs/kit';


/** @type {import('./$types').PageLoad} */
import { supabase } from "$lib/supabaseClient";

export async function load({ params }) {
  const book = await supabase.from("book_info").select().ilike('title_short', `%${params.book}%`)
  const verse = await supabase.from("t_kjv").select().eq('b', book.data[0].order).eq('c', params.chapter).eq('v', params.verse)
  console.log(verse)
  if (!verse.data?.length)   throw error(404, 'Not found');

  return {
    params: {
      book: params.book,
      chapter: params.chapter,
      verse: params.verse,
    },
	  book: book.data ?? [],
    verse: verse.data ?? [],
  }
}
