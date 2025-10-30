import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/features/login/components/login-form";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <div className={"flex justify-center items-center w-full h-screen"}>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <LoginForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Ao continuar, você concorda com nossos{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Termos de Serviço
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
