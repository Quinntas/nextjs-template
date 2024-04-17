'use client';

import {usePathname} from 'next/navigation';

export function useIsInUrl() {
    const pathName = usePathname();

    function isInUrl(page: string) {
        return pathName.includes(page);
    }

    return isInUrl;
}
