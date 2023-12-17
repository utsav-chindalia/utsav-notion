import type { Config } from 'drizzle-kit';
import * as dotevn from 'dotenv';
dotevn.config({path: '.env'});


if(!process.env.DATABASE_URL){
    console.log("Cannot find database url");
}

export default {
    schema: './src/lib/supabase/schema.ts',
    out: './migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL || '',
    },
} satisfies Config;