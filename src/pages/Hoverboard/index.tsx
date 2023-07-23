import React from 'react'

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

const Index = () => {
  const squaresRef = React.useRef<HTMLDivElement[]>([]);

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  React.useEffect(() => {
    const handleMouseEnter = (event: MouseEvent) => {
      const ele = event.target as HTMLDivElement;
      const color = getRandomColor()
      ele.style.background = color
      ele.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }
    const handleMouseLeave = (event: MouseEvent) => {
      const ele = event.target as HTMLDivElement;
      setTimeout(() => {
        ele.style.background = '#1d1d1d'
        ele.style.boxShadow = '0 0 2px #000'
      }, 1000);
    }
    const squares = squaresRef.current;
    squares.forEach(square => {
      square?.addEventListener('mouseenter', handleMouseEnter)
      square?.addEventListener("mouseleave", handleMouseLeave)
    })
    return function () {
      squares.forEach(square => {
        square?.removeEventListener('mouseenter', handleMouseEnter)
        square?.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, []);

  return (
    <div className='bg-[#111] w-full h-screen relative'>
      <div className='flex flex-wrap gap-1 max-w-[400px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        {new Array(500).fill(1).map((_, index) => <div
          ref={current => squaresRef.current.push(current as HTMLDivElement)}
          className='bg-[#1d1d1d]  w-4 h-4 transition-all ease duration-1000'
          key={index}>
        </div>)}

      </div>
    </div>
  )
}

export default Index