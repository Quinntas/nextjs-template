import {defineConfig} from "drizzle-kit";

export default defineConfig({
    dialect: 'postgresql',
    schema: './src/lib/drizzle/schema',
    verbose: true,
    strict: true,
})
