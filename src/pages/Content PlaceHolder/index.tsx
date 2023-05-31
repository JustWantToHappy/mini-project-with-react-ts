import React from 'react'
import styles from "./index.module.css"

type CardInfo = Partial<{
  title: string;
  content: string;
  name: string;
  date: string;
  show: boolean;
}>

export default function Index() {
  const [data, setData] = React.useState<CardInfo>({});

  React.useEffect(() => {
    //模拟预加载数据
    setTimeout(() => {
      setData({
        title: "Lorem ipsum dolor sit amet",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
        name: "John Doe",
        date: "Oct 08, 2020",
        show: true
      })
    }, 3000);
  }, []);

  return (
    <div className="w-full h-screen bg-[#ecf0f1] flex items-center justify-center overflow-hidden">
      <div className="drop-shadom-md overflow-hidden rounded-lg w-80">
        {data.show ?
          <img className="h-54 object-cover" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="The image is not display." />
          : <img className={`h-54 object-cover ${styles["animated-bg"]} h-56`} src="" />
        }
        <div className="bg-white px-4 py-2 h-48">
          <header className="h-20">
            {data.show ?
              <h4 className="font-bold my-2">{data.title}</h4>
              : <h4 className={`${styles["animated-bg"]} w-full h-4 my-4`}></h4>
            }
            {data.show ?
              <p className="text-sm">{data.content}</p>
              : <p className={`${styles["animated-bg"]} w-full h-4`}></p>
            }
          </header>
          <div className="my-4 grid grid-cols-3 grid-rows-2 w-[60%] text-xs h-16">
            {data.show ?
              <img className="rounded-full h-12 row-span-2" src="https://randomuser.me/api/portraits/men/45.jpg" alt="The avator is not display." />
              : <div className={`rounded-full h-12 row-span-2 w-12 ${styles["animated-bg"]}`}></div>
            }
            {data.show ?
              <h5 className="font-bold">{data.name}</h5>
              : <h5 className={`h-3 mb-4 ${styles["animated-bg"]}`}></h5>
            }
            {data.show ?
              <span className="col-start-2 col-end-4  text-[#AAAAAA]">{data.date}</span>
              : <span className={`${styles["animated-bg"]} col-start-2 col-end-4 h-3`}></span>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
