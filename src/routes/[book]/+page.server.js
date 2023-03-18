import { error } from '@sveltejs/kit';


/** @type {import('./$types').PageLoad} */
import { supabase } from "$lib/supabaseClient";

export async function load({ params }) {
  const book = await supabase.from("book_info").select().ilike('title_short', `%${params.book}%`)
  return {
    params: {
      book: params.book
    },
	  book: book.data ?? []
  }
}
