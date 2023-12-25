import React from "react";
/**
 * 节流Hook
 */
type ThrottleCallback = (...args:unknown[]) => void;

export function useThrottle(callback:ThrottleCallback,delay=100) {
  //记录上一次时间戳
  const preTime = React.useRef(0);

  const throttledCallback = React.useCallback(function(...args:unknown[]) {
		let result;
		const currentTime = Date.now();
		if (!preTime.current) {
			preTime.current = currentTime;
		}
    if (currentTime- preTime.current >= delay) {
			result=callback.call(this, ...args);
			preTime.current=new Date().getTime()
    }
		return result;
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