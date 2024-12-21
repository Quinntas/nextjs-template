import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {ThemeProvider} from "@/components/providers/theme-provider";
import {Toaster} from "@/components/ui/sonner";
import {ClerkProvider} from "@clerk/nextjs";
import {NuqsAdapter} from "nuqs/adapters/next/app";
import {TooltipProvider} from "@/components/ui/tooltip";
import {TailwindIndicator} from "@/components/tailwind-indicator";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: {
        default: 'NextJS Template',
        template: '%s | NextJS Template',
    },
    description: 'NextJS Template',
    robots: {
        follow: true,
        index: true,
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider dynamic>
            <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
            <NuqsAdapter>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <TooltipProvider>
                        {children}
                    </TooltipProvider>
                    <Toaster/>
                    <TailwindIndicator/>
                </ThemeProvider>
            </NuqsAdapter>
            </body>
            </html>
        </ClerkProvider>
    );
}
