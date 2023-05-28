const images = [
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
  "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
]
export default function Index() {

  return (
    <div className="relative">
      <div className="flex w-[500vw] h-screen justify-center items-center overflow-hidden animate-slider-move">
        {images.map((src) =>
          <div
            key={src}
            style={{ backgroundImage: `url(${src})` }}
            className="w-full h-full bg-no-repeat bg-center bg-cover "
          >
          </div>)}
      </div >
      <div className="w-screen absolute z-1  top-[50vh] -translate-y-[50%] flex justify-between  text-white">
        <i className="iconfont icon-zuo cursor-pointer text-6xl rounded-r-lg block p-4 pl-8 bg-[rgba(0,0,0,.4)] hover:text-orange-600"></i>
        <i className="iconfont icon-you cursor-pointer text-6xl rounded-l-lg block p-4 pl-8 bg-[rgba(0,0,0,.4)] hover:text-orange-600" ></i>
      </div>
    </div>
  )
}
