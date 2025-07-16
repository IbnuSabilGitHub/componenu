import { useState,useEffect } from 'react';
export function useBreakpointValue<T>(values: { [key: string]: T }, defaultValue: T): T {
    const [value, setValue] = useState<T>(defaultValue);

    useEffect(() => {
        function updateValue() {
            const width = window.innerWidth;
            if (width >= 1608) setValue(values.xl ?? defaultValue);
            else setValue(values.base ?? defaultValue);
        }
        updateValue();
        window.addEventListener("resize", updateValue);
        return () => window.removeEventListener("resize", updateValue);
    }, [values, defaultValue]);

    return value;
}