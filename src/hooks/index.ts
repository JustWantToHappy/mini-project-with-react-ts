import React from "react";
import throttle from "../utils/throttle";

interface ThrottleOptions{
  delay: number;
  deps?: [];
}

type ThrottleCallback = (...args:any[]) => void;

export function useThrottle(callback:ThrottleCallback,ops:ThrottleOptions) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const  throttledCallback = React.useMemo(()=>throttle(callback,ops.delay),ops.deps);
  return [throttledCallback];
} 