import { MutableRefObject, useEffect } from "react";

export function useClickOutside<T extends HTMLElement>(
    refs: Array<MutableRefObject<T | null>>,
    onClickOutside: () => void,
    enabled: boolean = true
) {
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                refs.every(
                    (ref) => ref.current && !ref.current.contains(e.target as Node)
                )
            ) {
                onClickOutside();
            }
        }

        if (enabled) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [refs, enabled, onClickOutside]);
}