import {pgTable, text, timestamp, varchar} from 'drizzle-orm/pg-core';

export const userTable = pgTable('user', {
    id: varchar('id', {length: 191}).primaryKey(),
    avatar: text('avatar').notNull().default('https://i.imgur.com/WxNkK7J_d.webp?maxwidth=760&fidelity=grand'),
    username: varchar('username', {length: 191}).notNull(),
    email: varchar('email', {length: 191}).notNull().unique(),
    hashed_password: varchar('hashed_password', {length: 191}).notNull(),
    created_at: timestamp('created_at', {mode: 'date', withTimezone: true}).defaultNow().notNull(),
    updated_at: timestamp('updated_at', {mode: 'date', withTimezone: true}).defaultNow().notNull(),
});

export const sessionTable = pgTable('session', {
    id: varchar('id', {length: 191}).primaryKey(),
    userId: varchar('user_id', {length: 191})
        .notNull()
        .references(() => userTable.id),
    expiresAt: timestamp('expires_at', {
        withTimezone: true,
        mode: 'date',
    }).notNull(),
});
