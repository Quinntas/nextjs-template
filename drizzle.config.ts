import {defineConfig} from 'drizzle-kit'

export default defineConfig({
    schema: "./lib/database/tables.ts",
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.POSTGRES_URL!,
    },
    verbose: true,
    strict: true,
})