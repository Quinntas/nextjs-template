import {cache as react_cache} from "react"
import {unstable_cache as next_unstable_cache} from "next/cache"

// next_unstable_cache doesn't handle deduplication, so we wrap it in React's cache
export const cache = <Inputs extends unknown[], Output>(
    cb: (...args: Inputs) => Promise<Output>,
    keyParts: string[],
    options?: {
        /**
         * The revalidation interval in seconds.
         */
        revalidate?: number | false
        tags?: string[]
    }
) => react_cache(next_unstable_cache(cb, keyParts, options))
