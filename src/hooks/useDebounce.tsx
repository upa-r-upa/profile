import { useCallback, useEffect, useRef } from 'react';

/**
 * It returns a function that will call the callback function after the specified delay with debounce
 * @param {number} delayMillisecond - The time in milliseconds to debounce.
 */
export default function useDebounce(delayMillisecond: number) {
  const timerRef = useRef<NodeJS.Timeout>();

  const clearInterval = useCallback(() => {
    if (!timerRef.current) {
      return;
    }

    clearTimeout(timerRef.current);
  }, []);

  const dispatch = (callback: () => void) => {
    clearInterval();

    timerRef.current = setTimeout(callback, delayMillisecond);
  };

  useEffect(() => {
    return clearInterval();
  }, [clearInterval]);

  return [dispatch];
}
