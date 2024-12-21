import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function toSentenceCase(str: string) {
    return str
        .replace(/_/g, " ")
        .replace(/([A-Z])/g, " $1")
        .toLowerCase()
        .replace(/^\w/, (c) => c.toUpperCase())
        .replace(/\s+/g, " ")
        .trim()
}

export function formatDate(
    date: Date | string | number,
    opts: Intl.DateTimeFormatOptions = {}
) {
    return new Intl.DateTimeFormat("en-US", {
        month: opts.month ?? "long",
        day: opts.day ?? "numeric",
        year: opts.year ?? "numeric",
        ...opts,
    }).format(new Date(date))
}
