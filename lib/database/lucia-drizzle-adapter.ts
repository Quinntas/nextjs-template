import {DrizzlePostgreSQLAdapter} from "@lucia-auth/adapter-drizzle";

import pg from "pg";
import {drizzle} from "drizzle-orm/node-postgres";
import {sessionTable, userTable} from "@/lib/database/tables";
import * as schema from "./tables"

const pool = new pg.Pool({
    connectionString: process.env.POSTGRES_URL
});

export const db = drizzle(pool, {schema});

export const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable);