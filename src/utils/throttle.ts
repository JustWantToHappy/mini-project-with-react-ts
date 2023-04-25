export default function throttle(fn: () => void, delay: number) {
  let preTime: number = Date.now();
  let first = true;
  return function (...args: any[]) {
    const that = this as any;
    if (first) {
      fn.apply(that, args);
      first = false;
    }
    if (preTime + delay > Date.now()) {
      return;
    }
    preTime = Date.now();
    setTimeout(() => {
      fn.apply(that, args);
    }, delay);
  };
}