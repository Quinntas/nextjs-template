import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex flex-col gap-[15px] items-center justify-center w-screen h-screen">
            <h1 className="text-3xl font-bold">404 Not Found.</h1>
            <p>Looks like this page doesn&apos;t exist.</p>
            <Button
                variant={"link"} className={"border border-dashed"}>
                <Link href={"/"}>Go Home</Link>
            </Button>
        </div>
    );
}