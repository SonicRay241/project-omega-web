import { createRef, RefObject, useLayoutEffect, useState } from "react";

const useIsOverflow = (ref: RefObject<HTMLDivElement>, isVerticalOverflow: boolean = true, callback?: (overflow: boolean) => void) => {
    const [isOverflow, setIsOverflow] = useState<boolean | undefined>(undefined);

    useLayoutEffect(() => {
        const { current } = ref;
        const { clientWidth, scrollWidth, clientHeight, scrollHeight } = current || { clientWidth: 0, scrollWidth: 0, clientHeight: 0, scrollHeight: 0 };

        const trigger = () => {
            const hasOverflow = isVerticalOverflow ? scrollHeight > clientHeight : scrollWidth > clientWidth;

            setIsOverflow(hasOverflow);

            if (callback) callback(hasOverflow);
        };

        if (current) {
            trigger();
        }
    }, [callback, ref, isVerticalOverflow]);

    return isOverflow;
};

export default useIsOverflow;
