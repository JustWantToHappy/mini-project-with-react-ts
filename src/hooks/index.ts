import React from "react";
/**
 * 节流Hook
 */
type ThrottleCallback = (...args:any) => void;

export function useThrottle(callback:ThrottleCallback,delay=100) {
  //记录上一次时间戳
  const preTime = React.useRef<number>(0);
  React.useEffect(() => {
    preTime.current = Date.now();
  }, [delay]);
  
  const throttledCallback = React.useCallback(function(...args:any) {
    const that = this as any;
    if (Date.now() - preTime.current < delay) {
      return;
    }
    preTime.current = new Date().getTime();
    setTimeout(() => {
      callback.call(that, ...args);
    }, delay);
  }, [callback]);

  return throttledCallback
}   