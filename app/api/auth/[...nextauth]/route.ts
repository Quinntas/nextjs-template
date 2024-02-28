import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";


const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: "",
            clientSecret: "",
        }),
    ],
    secret: process.env.AUTH_SECRET as string,
    callbacks: {
        session({user, session}) {
            const name = session.user.name.split(" ");

            session.user = {
                ...session.user,
                pid: "",
                avatar: session.user.image,
                firstName: name[0],
                lastName: name[name.length - 1] ?? "",
                phone: "",
            }
            return session;
        },
    },
});

export {handler as GET, handler as POST};
