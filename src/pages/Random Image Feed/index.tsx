import React from 'react'

const Index = () => {
  const unsplashURL = 'https://source.unsplash.com/random/'
  const imgsRef = React.useRef<Map<string, HTMLImageElement>>(new Map());
  const [imgs, setImgs] = React.useState<string[]>([])

  React.useEffect(() => {
    const imgs: string[] = [];
    for (let i = 0; i < 3 * 5; i++) {
      imgs.push(`${unsplashURL}${i}`);
    }
    setImgs(imgs)
  }, []);

  React.useEffect(() => {
    const images: HTMLImageElement[] = [];

    const handleImageLoad = (event: Event) => {
      const proxyImg = event.target as HTMLImageElement;
      const src = proxyImg.getAttribute('src') ?? ""
      const realImg = imgsRef.current.get(src)
      if (realImg && !realImg?.getAttribute('src')) {
        realImg.src = src;
        realImg.style.opacity = "1"
        //移除骨架屏动画
        realImg.parentElement?.classList.remove('animate-bg')
      }
      proxyImg.removeEventListener('load', handleImageLoad);
    }

    imgs.forEach(url => {
      //使用代理
      const image = new Image();
      images.push(image)
      image.src = url;
      image.addEventListener('load', handleImageLoad)
    });

    return function () {
      images.forEach(image => {
        image.removeEventListener('load', handleImageLoad)
      })
    }
  }, [imgs])

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-extrabold text-4xl py-4'>Random Image Feed</h1>
      <div className='flex flex-wrap gap-8 max-w-[1000px] p-4 pb-8 relative justify-center '>
        {/*  */}
        {imgs.slice(0, 4).map((img, index) => <div
          key={img}
          className='group w-[300px] max-w-full h-[300px] animate-bg overflow-hidden rounded-xl relative shadow-xl'>
          {index === 0 && <div
            style={{ background: 'linear-gradient(to bottom, rgba(72,76,97,0) 0%, rgba(72,76,97,0.8) 75%)' }}
            className='absolute w-full h-full z-2 left-0 -bottom-full group-hover:bottom-0 transition-all ease'>
          </div>}
          {index === 1 && <div
            className='absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-transparent border w-1/2 h-1/2 group-hover:border-white  group-hover:w-[85%] group-hover:h-[85%] group-hover:bg-[rgba(255,255,255,.1)] transition-all linear'>
          </div>}
          {index === 2 && <div
            className='absolute z-2'>
          </div>}
          {index === 3 && <div
            className='absolute z-1 w-full h-full opacity-0 bg-[#008E6B] group-hover:opacity-30 transition-all ease duration-300'>
            <div
              className='absolute z-2 w-full h-full border border-white opacity-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:w-[60%] group-hover:h-[60%] group-hover:opacity-100 transition-all ease duration-300'>
            </div>
          </div>}
          <img
            ref={current => current && !imgsRef.current.has(img) && imgsRef.current.set(img, current)}
            alt='图片'
            data-src={img}
            className={`object-cover w-full h-full opacity-0 transition-all ease duration-300 ${index === 2 ? 'group-hover:-translate-x-8' : ''}`} />
        </div>)}
        {/* 放大缩小的图片 */}
        {imgs.slice(4).map((img, index) => <div
          key={img}
          className='group w-[300px] max-w-full h-[300px] animate-bg overflow-hidden rounded-xl relative'>
          <img
            ref={current => current && !imgsRef.current.has(img) && imgsRef.current.set(img, current)}
            alt='图片'
            data-src={img}
            className={`object-cover w-full h-full opacity-0 transition-all ease  duration-300  hover:scale-110 ${index % 2 === 0 ? 'scale-125' : ''} `} />
        </div>)}
      </div>
    </div>
  )
}

export default Index