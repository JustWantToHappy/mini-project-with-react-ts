import React from 'react'

const Index = () => {
  const [count, setCount] = React.useState(1)
  const containerRef = React.useRef<HTMLDivElement>(null);
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const handleClick = React.useCallback(() => {
    const notify = document.createElement("div")
    notify.innerText = `Messages ${count}`
    setCount(count => count + 1);
    notify.className = 'bg-white text-sm p-4 m-4 text-purple-900 rounded-md transition-all duration-200 linear'
    containerRef.current?.appendChild(notify);
    setTimeout(() => {
      notify.remove();
    }, 3000);
  }, [count]);

  React.useEffect(() => {
    const btn = btnRef.current;
    btn?.addEventListener('click', handleClick);
    return function () {
      btn?.removeEventListener('click', handleClick)
    }
  }, [handleClick]);

  return (
    <main className='flex items-center justify-center bg-purple-900 w-full h-screen'>
      <div
        className='absolute h-4 right-12 top-4 z-1'
        ref={containerRef}></div>
      <button
        ref={btnRef}
        className='text-purple-900 bg-white px-2 py-4 rounded-md text-sm font-bold active:scale-95 transition-all duration-200 linear'>
        Show Notification
      </button>
    </main>
  )
}

export default Index