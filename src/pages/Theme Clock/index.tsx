import React from 'react'
import { useThrottle } from "../../hooks";


export default function Index() {
  //黑夜模式
  const [dark, setDark] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const throttledClick = useThrottle(() => {
    setDark(mode => !mode);
  }, 500);

  const dateinfo = React.useMemo(() => {
    const addZero = (num: number) => num < 10 ? "0" + num : num;
    const hours = date.getHours();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return {
      amOrPm,
      hours: addZero(hours % 12),
      minutes: addZero(minutes),
      seconds,
    };
  }, [date]);

  React.useEffect(() => {
    buttonRef.current?.addEventListener("click", throttledClick);
    return function () {
      buttonRef.current?.removeEventListener("click", throttledClick);
    }
  }, [throttledClick]);

  React.useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    const changeDate = () => {
      timer = setTimeout(() => {
        setDate(new Date())
        changeDate();
      }, 1000);
    }
    changeDate();
    return function () {
      timer && clearTimeout(timer);
    }
  }, []);

  return (
    <div
      style={{ backgroundColor: dark ? "#000" : "#fff", color: dark ? "#fff" : "#000" }}
      className="flex items-center transition-bg duration-300 w-full h-screen justify-center flex-col"
    >
      <button
        ref={buttonRef}
        style={{ backgroundColor: dark ? "#fff" : "#000", color: dark ? "#000" : "#fff" }}
        className="rounded-lg p-2"
      >
        {dark ? "Dark mode" : "Light mode"}
      </button>
      <div className="flex flex-col items-center justify-between">
        <div className="relative w-[200px] h-[200px] my-4 rounded-full">
          <div
            style={{ backgroundColor: dark ? "#fff" : "#000", color: dark ? "#000" : "#fff", transform: `rotate(${parseInt(dateinfo.hours as string) * 30 + 180}deg)` }}
            className="bg-black absolute top-[50%] left-[50%] w-1 h-[80px] origin-top transition-all ease-in duration-500 -translate-x-[50%] -translate-y-full "
          >
          </div>
          <div
            style={{ backgroundColor: dark ? "#fff" : "#000", color: dark ? "#000" : "#fff", transform: `rotate(${parseInt(dateinfo.minutes as string) * 6 + 180}deg)` }}
            className="bg-black absolute top-[50%] left-[50%] w-1 h-[100px] origin-top transition-all ease-in duration-500 -translate-x-[50%] -translate-y-full "
          ></div>
          <div
            style={{ transform: `rotate(${dateinfo.seconds * 6 + 180}deg)` }}
            className="bg-[#e74c3c] absolute top-[50%] left-[50%] w-1 h-[100px] transition-all origin-top ease-in duration-500 -translate-x-[50%] -translate-y-full "
          >
          </div>
          <div
            className="w-[10px] h-[10px] bg-[#e74c3c] rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] before:absolute before:top-[50%] before:left-[50%] before:-translate-x-[50%] before:-translate-y-[50%] before:w-[60%] before:h-[60%] before:bg-black before:rounded-full "
          >
          </div>
        </div>
        <div className="text-5xl">{dateinfo.hours}:{dateinfo.minutes}&nbsp;{dateinfo.amOrPm}</div>
      </div>
    </div>
  )
}
