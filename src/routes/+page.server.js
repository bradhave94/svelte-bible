import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("book_info").select()
  return {
	  books: data ?? [],
  }
}
