import {DefaultSession} from "next-auth";
import {User} from "@/libs/types/user";

declare module "next-auth" {
    interface Session {
        user: User & DefaultSession["user"]
    }
}
