import React from "react";

export default function Index() {
  const [active, setActive] = React.useState(0);
  const [hold, setHold] = React.useState(false);
  const [hover, setHover] = React.useState(-1);
  const fillRef = React.useRef<HTMLDivElement>(null);
  const dragsRef = React.useRef<Array<HTMLDivElement>>([]);

  React.useEffect(() => {
    const handleDrop = (event: MouseEvent) => {
      const id = (event.currentTarget as HTMLDivElement).dataset.id as string;
      setActive(parseInt(id));
    }
    const handleDragEnter = (event: MouseEvent) => {
      event.preventDefault();
    }
    const handleDragOver = (event: MouseEvent) => {
      event.preventDefault();
      const id = (event.currentTarget as HTMLDivElement).dataset.id as string;
      setHover(parseInt(id));
    }

    const handleDragLeave = () => {
      setHover(-1);
    }


    dragsRef.current.forEach(dragRef => {
      //drop 事件在元素或选中的文本被放置在有效的放置目标上时被触发
      dragRef?.addEventListener("drop", handleDrop);
      dragRef?.addEventListener("dragenter", handleDragEnter);
      dragRef?.addEventListener("dragover", handleDragOver);
      dragRef?.addEventListener("dragleave", handleDragLeave)
    });

    return function () {
      dragsRef.current.forEach(dragRef => {
        dragRef?.removeEventListener("drop", handleDrop);
        dragRef?.removeEventListener("dragenter", handleDragEnter);
        dragRef?.removeEventListener("dragover", handleDragOver);
        dragRef?.removeEventListener("dragleave", handleDragLeave);
      });
    }
  }, []);


  React.useEffect(() => {
    const handleDragStart = () => {
      setHold(true);
      console.info("start")
    };
    const handleDragEnd = () => {
      setHold(false);
      console.info("end");
    };

    fillRef.current?.addEventListener("dragstart", handleDragStart)
    fillRef.current?.addEventListener("dragend", handleDragEnd);

    return function () {
      fillRef.current?.removeEventListener("dragstart", handleDragStart);
      fillRef.current?.removeEventListener("dragend", handleDragEnd);
    }
  }, [active]);
  return (
    <div className="bg-[steelblue] w-full h-screen flex items-center justify-center flex-col gap-y-4 md:flex-row md:gap-x-6">
      {new Array(5).fill(1).map((_, index) => <div
        key={index}
        data-id={index}
        ref={current => dragsRef.current.push(current as HTMLDivElement)}
        style={hover === index && hold ? { background: "#333", borderColor: "#fff", borderStyle: "dotted" } : {}}
        className={"w-[145px] h-[145px] border-4 overflow-hidden" + `${active === index ? " min-w-[145px] min-h-[145px] bg-[#242424] border-[#242424]" : " bg-white border-[#ccc]"}` + `${hold && active === index ? " " : ""}`}
      >
        {active === index && <div
          ref={fillRef}
          style={{ backgroundImage: " url('https://source.unsplash.com/random/150x150')" }}
          className="h-[145px] w-[145px] cursor-pointer"
          draggable
        ></div>}
      </div>)}
    </div>
  )
}
