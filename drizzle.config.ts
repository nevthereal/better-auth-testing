import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dbCredentials: {
		url: 'file:local.db'
	},
	dialect: 'sqlite',
	driver: 'turso',
	schema: './src/lib/schema.ts',
	out: './drizzle'
});
