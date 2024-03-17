import {cn} from "@/lib/utils";

interface PageBoxProps {
    className?: string;
    children: React.ReactNode;
}

export function PageBox(props: PageBoxProps) {
    return <div
        className={cn("px-[20px] sm:px-[20%] pb-[20px] pt-[20px] sm:pt-[50px] flex justify-between flex-col sm:gap-[20px]", props.className)}>
        {props.children}
    </div>
}