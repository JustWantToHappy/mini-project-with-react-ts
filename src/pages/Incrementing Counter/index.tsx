import React from 'react'

type Count = Partial<{
  twitter: number;
  youtube: number;
  facebook: number;
}>

export default function Index() {
  const [count, setCount] = React.useState<Count>({});

  React.useEffect(() => {
    const updater = (counter: "twitter" | "youtube" | "facebook", maxCount: number, currentCount = 0) => {
      if (currentCount <= maxCount) {
        setCount(count => {
          count[counter] = currentCount;
          return { ...count };
        });
        setTimeout(() => {
          updater(counter, maxCount, currentCount + Math.floor(maxCount / 200));
        }, 1);
      } else {
        setCount(count => {
          count[counter] = maxCount;
          return { ...count };
        })
      }
    }
    updater("twitter", 12000);
    updater("youtube", 5000);
    updater("facebook", 7500);
  }, []);
  const { twitter, facebook, youtube } = count;
  const container = "flex flex-col justify-center text-center mx-[30px] my-[50px]"
  return (
    <main className="h-[100vh] w-full bg-[#8e44ad] flex justify-center items-center overflow-hidden m-0 text-white flex-col sm:flex-row">
      <div className={container}>
        <i className="iconfont icon-twitter text-4xl"></i>
        <div className="text-6xl my-4" data-target="12000">
          {twitter}
        </div>
        <span>Twitter Followers</span>
      </div>
      <div className={container}>
        <i className="iconfont icon-you2 text-4xl"></i>
        <div className="text-6xl my-4" data-target="5000">
          {youtube}
        </div>
        <span>YouTube Subscribers</span>
      </div>
      <div className={container}>
        <i className="iconfont icon-facebook text-4xl"></i>
        <div className="text-6xl my-4" data-target="7500">
          {facebook}
        </div>
        <span >Facebook Fans</span>
      </div>
    </main>
  )
}
