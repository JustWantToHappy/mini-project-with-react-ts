import React from 'react'
import { useThrottle } from '../../hooks'

const Index = () => {
  const length = 3;
  const [active, setActive] = React.useState(0)

  const handleWheel = useThrottle((event: React.WheelEvent) => {
    const up = event.deltaY >= 0;//判断是否向上滚动
    setActive(active => up ? Math.min(active + 1, length - 1) : Math.max(0, active - 1));
  }, 1000)


  return (
    <div
      onWheel={handleWheel}
      className={`h-screen w-full overflow-hidden`}>
      <div
        style={{ transform: `translate3d(0,-${active * 100}vh,0)` }}
        className='transition-all duration-300 linear'>
        <div className='w-full h-screen bg-rose-500'>
        </div>
        <div className='w-full h-screen bg-green-300'>
        </div>
        <div className='w-full h-screen bg-purple-400'>
        </div>
      </div>
    </div>
  )
}

export default Index