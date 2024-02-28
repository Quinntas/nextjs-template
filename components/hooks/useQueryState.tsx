import {useSearchParams} from "react-router-dom";

export type QueryStateParams = Record<string, string>;

interface UseQueryStateProps<T extends QueryStateParams> {
    defaults: Partial<T>;
    data: T;
}

export function useQueryState<T extends QueryStateParams>(props: UseQueryStateProps<T>) {
    const [searchParams, setSearchParams] = useSearchParams(
        props.defaults as QueryStateParams
    )

    function setQueryState(data: Partial<T>) {
        const newParams = {...searchParams, ...data};
        setSearchParams(newParams, {replace: true});
    }

    return {
        searchParams,
        setQueryState
    }
}