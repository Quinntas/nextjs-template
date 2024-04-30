'use client';

import {useEffect, useState} from 'react';

interface UseLocalStorageProps<T extends object> {
    default: T;
    key: string;
}

export function useLocalStorage<T extends object>(props: UseLocalStorageProps<T>) {
    const [item, setItem] = useState<T>();

    useEffect(() => {
        const lsItem = localStorage.getItem(props.key);

        if (!lsItem) {
            localStorage.setItem(props.key, JSON.stringify(props.default));
            setItem(props.default);
            return;
        }

        setItem(JSON.parse(lsItem!) as T);
    }, []);

    function updateItem(data: Partial<T>) {
        const newItem = {...item, ...data};
        setItem(newItem as T);
        localStorage.setItem(props.key, JSON.stringify(item));
    }

    return {
        item,
        updateItem,
    };
}
