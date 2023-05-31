import React from 'react'
import { useThrottle } from "../../hooks"

export default function Index() {
  const [show, setShow] = React.useState(true);

  const throttleScroll = useThrottle(() => {
    const height = window.innerHeight || document.documentElement.clientHeight;
    if (scrollY >= height / 6) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, 50);
  React.useEffect(() => {
    window.addEventListener("scroll", throttleScroll);
    return function () {
      window.removeEventListener("scroll", throttleScroll);
    }
  }, [throttleScroll]);

  return (
    <div className="relative">
      {/* 头部导航 */}
      <nav className={`fixed w-full shadow-md px-2 z-1 ${show ? "bg-black" : "bg-white"} ${show ? "text-white" : "text-black"}  ease-in duration-200 origin-bottom ${show ? "py-6" : "py-4"}`}>
        <div className="flex relative">
          <h1 className="text-md"><a href="#">My Website</a></h1>
          <ul className="w-[40%] flex justify-evenly items-center text-sm gap-x-4 absolute right-12 h-full md:gap-x-12">
            <li><a href="#" className="text-red-600">Home</a></li>
            <li><a href="#" className="hover:text-red-600 transition-all duration-200 linear origin-bottom ">About</a></li>
            <li><a href="#" className="hover:text-red-600 transition-all duration-200 linear origin-bottom">Services</a></li>
            <li><a href="#" className="hover:text-red-600 transition-all duration-200 linear origin-bottom">Contact</a></li>
          </ul>
        </div>
      </nav>
      {/* 首屏图片 */}
      <div
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}
        className="h-screen w-full bg-no-repeat bg-cover bg-center flex items-center text-white "
      >
        <div className="w-full text-center md:relative absolute mt-8 z-0">
          <h1 className="font-bold text-4xl mb-4">Welcome To My Website</h1>
          <p className="text-lg tracking-wide">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?</p>
        </div>
      </div>
      {/* 文章内容 */}
      <section className="p-4 text-[#555555] tracking-wider font-thin text-justify mb-10">
        <h2 className="font-bold mb-2">Content One</h2>
        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia aperiam corporis similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum labore, placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi!</p>

        <h3 className="font-bold my-2">Content Two</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur provident nostrum possimus inventore nisi laboriosam consequatur modi nulla eos, commodi, omnis distinctio! Maxime distinctio impedit provident, voluptates illo odio nostrum minima beatae similique a sint sapiente voluptatum atque optio illum est! Tenetur tempora doloremque quae iste aperiam hic cumque repellat?</p>
      </section>
    </div>
  )
}
