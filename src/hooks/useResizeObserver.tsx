import { useEffect, useRef, useState } from 'react';

import useDebounce from './useDebounce';

export interface ElementSize {
  width: number;
  height: number;
}

/**
 * This function conveniently provides useResizeObserver as hooks
 * @param [debounceMillisecond] - The debounce time in milliseconds.
 * @returns A function that returns an object with two properties: targetRef and size.
 */
export default function useResizeObserver<Target extends HTMLElement>(debounceMillisecond = 100) {
  const [dispatch] = useDebounce(debounceMillisecond);
  const targetRef = useRef<Target | null>(null);

  const [elementSize, setElementSize] = useState<ElementSize>({
    width: 0,
    height: 0,
  });

  const handleTargetResize = (entries: Array<ResizeObserverEntry>) => {
    const [target] = entries;

    if (!target) {
      return;
    }

    const { width, height } = target.contentRect;

    dispatch(() => setElementSize({ width, height }));
  };

  const observerRef = useRef<ResizeObserver>(new ResizeObserver(handleTargetResize));

  useEffect(() => {
    setElementSize({
      width: targetRef.current?.clientWidth || 0,
      height: targetRef.current?.clientHeight || 0,
    });
  }, [setElementSize]);

  useEffect(() => {
    if (!targetRef.current) {
      return;
    }

    observerRef.current.observe(targetRef.current);

    const disconnect = () => {
      observerRef.current.disconnect();
    };

    return () => disconnect();
  }, []);

  return { targetRef, size: elementSize };
}
