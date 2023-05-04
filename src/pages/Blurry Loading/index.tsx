import React from 'react'
import StyleDiv from './style'

export default function Index() {
  const bgRef = React.useRef<HTMLElement>(null);
  const loadingTextRef = React.useRef<HTMLDivElement>(null);
  const [process, setProcess] = React.useState(0);

  const scale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

  React.useEffect(() => {
    const timeout = setInterval(() => {
      /**
       * 不能这样，因为process始终是初始值，因为useEffect只会在挂载和卸载时候被调用
       * 所以这里相当于一个闭包函数
       *  if (process === 100) {
          clearInterval(timeout);
        }
       */
      setProcess(process => {
        if (process === 99) {
          clearInterval(timeout);
        }
        return process + 1;
      });
    }, 30);
    document.body.style.overflow = 'hidden';
    return function () {
      clearInterval(timeout);
      document.body.style.overflow = 'auto';
    }
  }, []);

  return (
    <StyleDiv>
      <section className="bg" ref={bgRef} style={{ filter: `blur(${scale(process + 1, 0, 100, 30, 0)}px)` }}>

      </section>
      <div
        className="loading-text"
        ref={loadingTextRef}
        style={{ opacity: scale(process + 1, 0, 100, 1, 0) }}>
        {process}%
      </div>
    </StyleDiv>
  )
}
