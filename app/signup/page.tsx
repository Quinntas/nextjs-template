import {PageBox} from "@/app/_components/page-box";
import Link from "next/link";
import {SignupForm} from "@/app/signup/_components/signup-form";
import {Suspense} from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Signup",
};

export default function Login() {
    return <PageBox className={"justify-center items-center w-full h-screen"}>
        <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">

                <Suspense>
                    <SignupForm/>
                </Suspense>
                <p className="px-8 text-center text-sm text-muted-foreground">
                    By clicking continue, you agree to our{" "}
                    <Link
                        href="/terms"
                        className="underline underline-offset-4 hover:text-primary"
                    >
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="/privacy"
                        className="underline underline-offset-4 hover:text-primary"
                    >
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>
        </div>
    </PageBox>
}