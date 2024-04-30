import {DrizzlePostgreSQLAdapter} from '@lucia-auth/adapter-drizzle';
import {db} from './connection';
import {sessionTable, userTable} from './tables';

export const luciaAdapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable);
