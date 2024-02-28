"use client"

import {useSearchParams} from "react-router-dom";

export type QueryStateParams = Record<string, string>;

interface UseQueryStateProps<T extends QueryStateParams> {
    defaults: Partial<T>;
}

export function useQueryState<T extends QueryStateParams>(props: UseQueryStateProps<T>) {
    const [searchParams, setSearchParams] = useSearchParams(
        props.defaults as QueryStateParams
    )

    function getQueryState(key: string) {
        return searchParams.get(key)
    }

    function setQueryState(data: Partial<T>, replace: boolean = true) {
        setSearchParams({...searchParams, ...data}, {replace});
    }

    return {
        getQueryState,
        setQueryState
    }
}