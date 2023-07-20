import React from 'react'

const Index = () => {
  const text = 'We Love Programming!'
  const [, setIndex] = React.useState(1)
  const [speed, setSpeed] = React.useState(2)
  const textRef = React.useRef<HTMLHeadingElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(parseInt(event.target.value));
  }

  /*  React.useEffect(() => {
      const timer = setInterval(() => {
        setIndex(index => {
          const nextIndex = index + 1 >= text.length ? 1 : index + 1;
          if (textRef.current) {
            textRef.current.innerHTML = text.slice(0, nextIndex)
          }
          return nextIndex;
        })
      }, 300 / speed);
      return function () {
        clearInterval(timer)
      }
    }, [speed]);*/

  React.useEffect(() => {
    const fn = function () {
      setIndex(index => {
        const nextIndex = index + 1 >= text.length ? 1 : index + 1;
        if (textRef.current) {
          textRef.current.innerHTML = text.slice(0, nextIndex)
        }
        clearTimeout(timer);
        timer = setTimeout(fn, 300 / speed);
        return nextIndex;
      })
    }
    let timer = setTimeout(fn, 300 / speed);
    return function () {
      clearTimeout(timer)
    }
  }, [speed])

  return (
    <div className='bg-[darksalmon] w-full h-screen text-center overflow-hidden'>
      <h1 className='mt-[50vh] font-extrabold text-3xl' ref={textRef}>Starting...</h1>
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 p-4 bg-[rgba(0,0,0,.1)]'>
        <label htmlFor='speed'>Speed:</label>
        <input
          className='p-2'
          onChange={handleChange}
          id='speed'
          type='number'
          min='1'
          max='10'
          value={speed} />
      </div>
    </div>
  )
}

export default Index