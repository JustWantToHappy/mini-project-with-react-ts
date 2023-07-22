import React from 'react'

const Index = () => {
  const counterRef = React.useRef<HTMLDivElement>(null);
  const btnRef = React.useRef<HTMLDivElement>(null)
  const spanRef = React.useRef<HTMLSpanElement>(null);
  const [index, setIndex] = React.useState(3);

  const hanldeAnimationEnd = React.useCallback(() => {
    const span = spanRef.current;
    if (span?.classList.contains('animate-num-in')) {
      span.classList.remove('animate-num-in');
      span.classList.add('animate-num-out')
    } else {
      span?.classList.remove('animate-num-out');
      span?.classList.add('animate-num-in')
      setIndex(index => {
        if (index === 0) {
          span?.removeEventListener('animationend', hanldeAnimationEnd);
          counterRef.current && (() => counterRef.current.style.display = 'none')();
          btnRef.current && (() => btnRef.current.style.display = 'block')()
          return 3;
        } else {
          return index - 1;
        }
      })
    }
  }, [])

  const showAnimation = () => {
    counterRef.current && (() => counterRef.current.style.display = 'block')();
    btnRef.current && (() => btnRef.current.style.display = 'none')()
    spanRef.current?.addEventListener('animationend', hanldeAnimationEnd)
  }

  React.useEffect(() => {
    const span = spanRef.current;
    span?.addEventListener('animationend', hanldeAnimationEnd)
    return function () {
      span?.removeEventListener('animationend', hanldeAnimationEnd)
    }
  }, [hanldeAnimationEnd]);

  return (
    <div className='flex w-full h-screen overflow-hidden items-center justify-center'>
      <div className='text-center' ref={counterRef}>
        <div className='inline-block overflow-hidden px-8'>
          <span
            ref={spanRef}
            className='text-[#3498db] text-5xl inline-block animate-num-in'>
            {index}
          </span>
        </div>
        <h2 className='uppercase font-extrabold'>Get Ready</h2>
      </div>
      <div className='animate-replay-show text-center' ref={btnRef} style={{ display: 'none' }}>
        <h1>Go</h1>
        <button
          className='bg-[#3498db] p-2 rounded-md text-white active:scale-95 transition-all linear mt-4'
          onClick={showAnimation}>
          <span>Replay</span>
        </button>
      </div>
    </div>
  )
}

export default Index