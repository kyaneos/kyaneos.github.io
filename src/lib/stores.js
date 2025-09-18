import { writable } from 'svelte/store';

// Theme store for dark mode toggle
export const theme = writable('light');

// Navigation state
export const mobileMenuOpen = writable(false);

// Publications data (will be fetched from Google Sheets)
export const publications = writable([]);

// Projects data
export const projects = writable([]);

// Blog posts data
export const blogPosts = writable([]);