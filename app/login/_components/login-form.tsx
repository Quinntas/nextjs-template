"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "sonner";
import {loginSchema} from "@/app/login/_components/login-schema";
import {login} from "@/app/login/_actions/login-action";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import Link from "next/link";
import {useRouter} from "next/navigation";


export function LoginForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof loginSchema>) {
        setIsLoading(true)
        const res = await login(values)
        if (res.error) {
            toast(res.error)
            setIsLoading(false)
        } else {
            toast("Logged in successfully")
            return router.push('/')
        }
    }

    return <Card>
        <CardHeader>
            <CardTitle>
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Login to your account
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your information below
                    </p>
                </div>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[15px]">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="johndoe@gmail.com" type={"email"}
                                           disabled={isLoading} {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="*******" type={"password"} disabled={isLoading} {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className={"w-full"} disabled={isLoading}>Submit</Button>
                </form>
            </Form>
            <div className={"flex items-center gap-1 justify-between text-sm mt-[15px]"}>
                <span>Dont have a account?</span>
                <Link href={"/signup"} className={"font-semibold"}>Create one</Link>
            </div>
        </CardContent>
    </Card>
}