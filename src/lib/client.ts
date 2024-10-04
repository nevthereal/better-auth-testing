import { createAuthClient } from 'better-auth/svelte';

export const client = createAuthClient({
	baseURL: 'http://localhost:5173'
});
