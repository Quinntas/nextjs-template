import {Lucia} from 'lucia';
import {luciaAdapter} from '@/lib/database/lucia-drizzle-adapter';

export const lucia = new Lucia(luciaAdapter, {
    sessionCookie: {
        expires: false,
        attributes: {
            secure: process.env.NODE_ENV === 'production',
        },
    },
    getUserAttributes: (attributes) => {
        return {
            username: attributes.username,
            email: attributes.email,
            avatar: attributes.avatar,
            created_at: attributes.created_at,
            updated_at: attributes.updated_at,
        };
    },
});

declare module 'lucia' {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: DatabaseUserAttributes;
    }
}

export interface DatabaseUserAttributes {
    username: string;
    email: string;
    avatar: string;
    created_at: Date;
    updated_at: Date;
}
