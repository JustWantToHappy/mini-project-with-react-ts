import React from 'react'

type Item = { [key in 'bg' | 'title' | 'desc' | 'imageUrl']: string };

const items: Item[] = [
  {
    bg: '#FD3555',
    title: 'Nature flower',
    desc: 'all in pink',
    imageUrl: 'https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80'
  },
  {
    bg: '#2A86BA',
    title: 'Blue Sky',
    desc: "with it's mountains",
    imageUrl: 'https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80'
  },
  {
    bg: '#252E33',
    title: 'Lonely castle',
    desc: 'in the wilderness',
    imageUrl: 'https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80'
  },
  {
    bg: '#FFB866',
    title: 'Flying eagle',
    desc: 'in the sunset',
    imageUrl: 'https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80'
  },
]

const Index = () => {
  const [translateY, setTranslateY] = React.useState(300);

  const handleUpClick = () => setTranslateY(translateY => (translateY + 100) % 400);

  const handleDownClick = () => setTranslateY(translateY => (translateY - 100 + 400) % 400)

  return (
    <div className="w-screen h-screen overflow-hidden text-white">
      <div
        style={{ transform: `translateY(-${translateY}vh)` }}
        className="w-[35%] h-full float-left transition-all duration-300 linear">
        {items.map(item => <div key={item.title}
          className="h-full flex justify-center items-center flex-col"
          style={{ backgroundColor: item.bg }}>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
        </div>)}
      </div>
      <div
        style={{ transform: `translateY(-${300 - translateY}vh)` }}
        className="w-[65%] h-full float-right  transition-all duration-300 linear">
        {items.map(item => <div
          style={{ backgroundImage: `url(${item.imageUrl})` }}
          className='w-full h-full bg-cover'
          key={item.title}>
        </div>)}
      </div>
      <div
        style={{ left: 'calc(35% - 3rem)' }}
        className="fixed top-1/2 -translate-y-1/2 z-1 text-gray-400">
        <button
          onClick={handleUpClick}
          className="w-12 h-12 bg-white rounded-l-xl translate-y-6 hover:text-gray-700">
          <i className="iconfont icon-xia text-2xl"></i>
        </button>
        <button
          onClick={handleDownClick}
          className="w-12 h-12 bg-white rounded-r-xl -translate-y-6 hover:text-gray-700">
          <i className="iconfont icon-shang text-2xl"></i>
        </button>
      </div>
    </div>
  )
}

export default Index