"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { loginSchema } from "../constants";
import { useAuth } from "../hooks/use-auth";

export function LoginForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { login } = useAuth();
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true);

    try {
      await login(values.email, values.password);
    } catch (e: unknown) {
      console.error(e);
      toast("Error ao fazer login, cheque as credenciais");
      setIsLoading(false);
      return;
    }

    router.push("/");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Faça login
            </h1>
            <p className="text-sm text-muted-foreground">
              Entre com suas informações de login
            </p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-[15px]"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="johndoe@gmail.com"
                      type={"email"}
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="*******"
                      type={"password"}
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className={"w-full"} disabled={isLoading}>
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
