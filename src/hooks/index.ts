import React from "react";
/**
 * 节流Hook
 */
type ThrottleCallback = (...args:any) => void;

export function useThrottle(callback:ThrottleCallback,delay=100) {
  //记录上一次时间戳
  const preTime = React.useRef(0);
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
  }, [callback,delay]);

  return throttledCallback
}   


export function useDebouce<CallBack extends (...args:unknown[])=>unknown>(fn:CallBack,delay:number) {
  const timerRef = React.useRef<number>();

  const debouceFn = React.useCallback((...args1:unknown[]) => {
    if(timerRef.current) clearTimeout(timerRef.current)  
    timerRef.current=setTimeout(() => {
      const result = fn.apply(this, args1);
      return result;
    }, delay);
  }, [delay, fn]);
  
  return debouceFn;
}