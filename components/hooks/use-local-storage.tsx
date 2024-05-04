'use client';

import {useLocalStorage as useLocalStoragaHook} from 'usehooks-ts';

interface UseLocalStorageProps<T extends object> {
    default: T;
    key: string;
}

export function useLocalStorage<T extends object>(props: UseLocalStorageProps<T>) {
    const [item, setItem] = useLocalStoragaHook<T>(props.key, props.default);

    function updateItem(data: Partial<T>) {
        setItem({...item, ...data});
    }

    return {
        item: item!,
        updateItem,
    };
}
