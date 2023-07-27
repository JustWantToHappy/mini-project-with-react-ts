import React from 'react'
import './index.css'

const Index = () => {
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const boxContainerRef = React.useRef<HTMLDivElement>(null);

  const createBoxes = React.useCallback(() => {
    if (!boxContainerRef.current?.children.length) {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          const box = document.createElement('div')
          box.classList.add('box')
          box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
          boxContainerRef.current?.appendChild(box)
        }
      }
    }
  }, [])

  React.useEffect(() => {
    const btn = btnRef.current;
    const boxContainer = boxContainerRef.current;

    createBoxes()

    const handleClick = () => {
      boxContainer?.classList.toggle('big')
    }

    btn?.addEventListener('click', handleClick)
    return function () {
      btn?.removeEventListener('click', handleClick)
    }
  }, [createBoxes])
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col overflow-hidden'>
      <button ref={btnRef} className="bg-[#f9ca24] text-white border-0 px-6 py-2 cursor-pointer fixed top-5 z-100 rounded-lg tracking-wider shadow-lg active:shadow-none active:scale-95 transition-all duration-75 ease">Magic 🎩</button>
      <div
        ref={boxContainerRef}
        className='big flex flex-wrap justify-center items-center w-[500px] h-[500px] relative transition-all duration-[400] ease'>
      </div>
    </div>
  )
}

export default Index