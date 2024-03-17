"use server"

import {cookies} from "next/headers";
import {validateSession} from "@/lib/lucia/validate-session";
import {lucia} from "@/lib/lucia/lucia";

export const logoutAction = async () => {
    const {session} = await validateSession();

    if (!session) return {
        success: false,
        error: "No session found"
    }

    await lucia.invalidateSession(session.id)

    const sessionCookie = lucia.createBlankSessionCookie()

    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)

    return {
        success: true,
        error: undefined
    }
}