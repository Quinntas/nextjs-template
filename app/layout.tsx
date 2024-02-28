import type {Metadata} from "next";
import {Inter as FontSans} from "next/font/google"
import "./globals.css";
import {cn} from "@/lib/utils";
import {ThemeProvider} from "@/lib/providers/theme-provider";
import {Toaster} from "@/components/ui/sonner"
import {AuthSessionProvider} from "@/lib/providers/auth-provider";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Nextjs Template",
    description: "Nextjs Template",
    robots: "follow, index",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}
        >
        <AuthSessionProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
                <Toaster/>
            </ThemeProvider>
        </AuthSessionProvider>
        </body>
        </html>
    );
}
