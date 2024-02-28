"use client"

import {useEffect, useState} from "react";

interface UseLocalStorageProps<T extends object> {
    defaults: Partial<T>;
    key: string;
}

export function useLocalStorage<T extends object>(props: UseLocalStorageProps<T>) {
    const [data, setData] = useState(props.defaults);

    useEffect(() => {
        localStorage.setItem(props.key, JSON.stringify(data));
    }, [data]);

    function setLocalStorage(newData: Partial<T>) {
        setData({...data, ...newData});
    }

    return {
        data,
        setLocalStorage
    }
}