import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("book_info").select().ilike('title_short', '%genesis%')
  return {
	books: data ?? [],
  }
}
