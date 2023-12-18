import React from 'react'

const Index = () => {
  const isDragRef = React.useRef(false)

  const handleDragStart = () => {
    isDragRef.current = true
  }
  const handleDrag = () => {

  }

  const handleDragEnd = () => {
    isDragRef.current = false
  }

  return (
    <div className='h-screen flex w-full'>
      <aside className=' bg-slate-200 min-w-[50px]'>
        aside
      </aside>
      <div
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        className=' cursor-ew-resize w-[4px] bg-slate-50 hover:bg-blue-300'>
      </div>
      <main className=' bg-slate-600 flex-1 min-w-[50px]'>
        main
      </main>
    </div>
  )
}

export default Index