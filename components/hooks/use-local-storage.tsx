"use client"

interface UseLocalStorageProps<T extends object> {
    defaults: Partial<T>;
    key: string;
}

export function useLocalStorage<T extends object>(props: UseLocalStorageProps<T>) {

}