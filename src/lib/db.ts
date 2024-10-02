import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

const client = createClient({
	url: 'file:local.db'
});

export const db = drizzle(client);
