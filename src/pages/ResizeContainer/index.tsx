import React from 'react'

const Index = () => {
	const isDragRef = React.useRef(false)
	const asideRef = React.useRef<HTMLElement>(null);

	const handleMouseDown = () => {
		isDragRef.current = true
	}

	React.useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			event.preventDefault()
			if (asideRef.current && isDragRef.current) {
				document.documentElement.style.cursor="ew-resize"
				asideRef.current.style.width=`${event.clientX-10}px`
			}
		}
		const handleMouseUp = () => {
			isDragRef.current = false
			document.documentElement.style.cursor="auto"
		}

		document.documentElement.addEventListener("mousemove",handleMouseMove)
		document.documentElement.addEventListener("mouseup",handleMouseUp)
		return function () {
			document.documentElement.removeEventListener("mousemove",handleMouseMove)
			document.documentElement.removeEventListener("mouseup",handleMouseUp)
		}
	}, [])
	
  return (
		<div className='h-screen  w-full bg-[#f4f5f5] px-2'>
			<nav className='h-12 flex items-center'>这是导航栏</nav>
			<div className="flex" style={{height:"calc(100vh - 3rem)"}}>
				<aside className='py-2 w-10' ref={ asideRef} style={{minWidth:100}}>
				<div className="bg-white h-full rounded-lg p-1 border border-gray-200">aside</div>
      </aside>
				<div
					onMouseDown={handleMouseDown}
					className='hover:cursor-ew-resize w-2 py-2 flex items-center justify-center group'>
					<div className='w-[2px] h-full group-hover:bg-[#005bda] group-hover:cursor-ew-resize'></div>
      </div>
      <main className=' flex-1 py-2' style={{minWidth:100}}>
				<div className="bg-white h-full border border-gray-200 rounded-lg p-2">main</div>
      </main>
			</div>
    </div>
  )
}

export default Index