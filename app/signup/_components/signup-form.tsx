"use client"

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {signupSchema} from "@/app/signup/_components/signup-schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {signUp} from "@/app/signup/_actions/signup-action";
import {toast} from "sonner"
import {useState} from "react";
import {useRouter} from "next/navigation";

export function SignupForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            passwordConfirmation: "",
        },
    })

    async function onSubmit(values: z.infer<typeof signupSchema>) {
        setIsLoading(true)
        const res = await signUp(values)
        if (res.error) {
            toast(res.error)
            setIsLoading(false)
        } else {
            toast("Account created successfully")
            return router.push('/')
        }
    }

    return <Card>
        <CardHeader>
            <CardTitle>
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Create your account
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
                        name="username"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe" disabled={isLoading} {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

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

                    <FormField
                        control={form.control}
                        name="passwordConfirmation"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="*******" type={"password"} disabled={isLoading} {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isLoading}>Submit</Button>
                </form>
            </Form>
        </CardContent>
    </Card>
}