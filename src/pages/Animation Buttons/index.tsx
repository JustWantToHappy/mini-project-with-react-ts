import React from 'react'
import StyleDiv from './style'

let drag = false;

export default function Index() {
  //拖动条容器
  const sliderContainerRef = React.useRef<HTMLDivElement>(null);
  //拖动条按钮
  const sliderBtnRef = React.useRef<HTMLSpanElement>(null);
  //拖动条百分比
  const [process, setProcess] = React.useState(50);

  const handleMouseDown = () => {
    drag = true;
  }


  const handleMouseMove = (event: MouseEvent) => {
    event.preventDefault();
    if (drag) {
      const { width: containerWidth, left: containerLeft } = sliderContainerRef.current!.getBoundingClientRect();
      const { width: btnWidth } = sliderBtnRef.current!.getBoundingClientRect();
      let x = event.clientX - containerLeft - btnWidth / 2;
      if (x < 0) {
        x = 0;
      } else if (x > containerWidth) {
        x = containerWidth;
      }
      setProcess(Math.round((x / containerWidth) * 100));
    }
  }

  const handleMouseUp = () => {
    console.info("end");
    drag = false;
  }
  React.useEffect(() => {
    sliderBtnRef.current?.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return function () {
      sliderBtnRef.current?.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
  }, []);
  return (
    <StyleDiv process={process}>
      <div className="slider">
        <div className="slider_box" ref={sliderContainerRef}>
          <span className="slider_btn" ref={sliderBtnRef} ></span>
          <span className="slider_color" ></span>
          <span className="slider_tooltip">{process + "%"}</span>
        </div>
      </div>
    </StyleDiv>
  )
}
