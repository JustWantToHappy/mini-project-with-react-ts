import React from 'react'
import { useThrottle } from "../../hooks";

type Cup = {
  id: number | string;
  current: HTMLDivElement;
}
export default function Index() {
  const cups = React.useRef<Array<Cup>>([]);
  const [selectedWaters, setSelectedWaters] = React.useState<(string | number)[]>([]);
  const cupClass = "bg-white border-4 border-solid border-[#144fc6] h-[330px] w-[150px] m-[30px 0] flex overflow-hidden flex-col rounded-b-3xl  text-[#3494e4] ";

  const handleClick = useThrottle((event: React.MouseEvent) => {
    const id = (event.target as HTMLDivElement)?.dataset?.id as string;
    const find = selectedWaters.includes(id);

    if ((find && selectedWaters[selectedWaters.length - 1] > id) || !find) {
      const newWaters = Array(parseInt(id) + 1).fill(0).map((_, index) => index + "");
      setSelectedWaters(newWaters);
    } else {
      selectedWaters.pop();
      setSelectedWaters([...selectedWaters]);
    }
  }, 100);

  const percentage = React.useMemo(() => {
    return (selectedWaters.length * 250) / 2000 * 100;
  }, [selectedWaters]);

  React.useEffect(() => {
    cups.current.forEach(cup => {
      cup?.current?.addEventListener("click", handleClick);
    })
    return function () {
      cups.current.forEach(cup => {
        cup?.current?.removeEventListener("click", handleClick);
      });
    }
  }, [handleClick]);

  return (
    <div className="bg-[#3494e4] text-white flex flex-col items-center pb-12">
      <h1 className="my-[10px]">Drink Water</h1>
      <h3 className="font-normal my-4">Goal: 2 Liters</h3>
      <div className={cupClass}>
        <div
          style={{ height: percentage === 100 ? 0 : "" }}
          className="flex flex-col items-center text-center flex-1 transition-allduration-300 ease justify-center"
        >
          <span className="text-2xl">2L</span>
          <small>Remained</small>
        </div>
        <div
          style={{ height: `${percentage}%` }}
          className="bg-[#3494e4] flex items-center justify-center font-bold transition-all ease duration-300 text-[#144fc6] text-2xl h-0"
        >
          {percentage === 0 ? "" : `${percentage}%`}
        </div>
      </div >
      <p className="text-center my-3 font-light">Select how many glasses of water that you have drank</p>
      <div className="flex flex-wrap items-center w-[280px]  justify-center">
        {Array(8).fill(250).map((liters, index) => <div
          key={index}
          data-id={index}
          style={{ backgroundColor: selectedWaters.includes(index + "") ? "#3494e4" : "", color: selectedWaters.includes("" + index) ? "#fff" : "" }}
          className={cupClass + "h-[6rem] transition-bg ease duration-100 w-[50px] rounded-b-xl cursor-pointer text-center m-[5px] items-center justify-center p-4"}
          ref={current => cups.current.push({ id: index, current: current as HTMLDivElement })}
        >
          {liters} ml
        </div>)
        }
      </div>
    </div >
  )
}
