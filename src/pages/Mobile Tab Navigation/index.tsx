import React from 'react'

const Index = () => {
  const [active, setActive] = React.useState(0)

  const arr = [
    { content: 'Home', icon: 'facebook', img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80' },
    { content: 'Work', icon: 'gouwuche2', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' },
    { content: 'Blog', icon: 'shuoming', img: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80' },
    { content: 'About Us', icon: 'fuzhidaima', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80' }
  ]

  return (
    <div className='flex justify-center items-center h-screen w-full flex-col'>
      <div className="overflow-hidden relative  h-2/3 w-[340px] rounded-b-xl">
        <nav className='bg-black rounded-t-xl'>
          <ul className='flex gap-x-4 p-2 justify-evenly text-sm text-white'>
            {arr.map((item, index) => <li
              style={active === index ? { color: 'rgb(147 51 234)' } : {}}
              onClick={() => setActive(index)}
              className='hover:text-purple-500 cursor-pointer'
              key={item.content}>
              <i className={`iconfont icon-${item.icon} flex flex-col items-center`}></i>
              <p>{item.content}</p>
            </li>)}
          </ul>
        </nav>
        {arr.map(((item, index) => <img
          style={index === active ? { zIndex: 1, opacity: 1 } : {}}
          className='w-full h-full object-cover -z-1 absolute opacity-0 transition-opacity duration-400 ease'
          src={item.img}
        />))}
      </div>
    </div>
  )
}

export default Index