import { error } from '@sveltejs/kit';


/** @type {import('./$types').PageLoad} */
import { supabase } from "$lib/supabaseClient";

export async function load({ params }) {
  const book = await supabase.from("book_info").select().ilike('title_short', `%${params.book}%`)
  if(!book.data?.length) throw error(404, 'No Book Found');

  if (params.chapter > book?.data[0].chapters) throw error(404, 'No Chapter Found. There are only ' + book?.data[0].chapters + ' chapters in ' + book?.data[0].title_short);
  const chapter = await supabase.from("t_nlt").select().eq('b', book.data[0].order_number).eq('c', params.chapter)

  if (params.verse > chapter?.data?.length)   throw error(404, 'No verse found. There is only ' + chapter?.data?.length + ' verses in this chapter');
  const verse = await supabase.from("t_nlt").select().eq('b', book.data[0].order_number).eq('c', params.chapter).eq('v', params.verse)

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
