import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    verse: params.verse,
    chapter: params.chapter,
    book: params.book
  };
}