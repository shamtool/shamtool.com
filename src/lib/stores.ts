import { writable } from 'svelte/store';

/**
 * The current page title.
 */
export const title = writable<string|null>(null);
