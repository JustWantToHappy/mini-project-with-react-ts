import React from 'react'
import StyleDiv from './style'
import SearchSvg from "../../assets/svg/search.svg";

let drag = false;

export default function Index() {
  //拖动条容器
  const sliderContainerRef = React.useRef<HTMLDivElement>(null);
  //拖动条按钮
  const sliderBtnRef = React.useRef<HTMLSpanElement>(null);
  //拖动条百分比
  const [process, setProcess] = React.useState(50);
  //产生波纹按钮
  const waveBtnRef = React.useRef<HTMLButtonElement>(null);
  //搜索图标
  const searchBtn = React.useRef<HTMLInputElement>(null);
  //搜索输入框
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  //暂停还是播放
  const [play, setPlay] = React.useState(true);

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
    drag = false;
  }

  const addWave = () => {
    const waveBtn = waveBtnRef.current;
    const newSpan = document.createElement('div');
    newSpan.classList.add("btn-ripple_outside_ripple");
    waveBtn?.appendChild(newSpan);
    setTimeout(() => {
      const secondChild = waveBtn?.children[1];
      if (secondChild) {
        waveBtn.removeChild(secondChild);
      }
    }, 1000);
  }

  const searchInputFocus = () => {
    searchInputRef.current?.focus();
  }

  const searchInputBlur = () => {
    searchBtn.current?.click();
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
      <div className="switch" >
        <input type="checkbox" id="switch" />
        <div className="switch_box">
          <label htmlFor='switch' />
          <div className="switch_btn">
          </div>
        </div>
      </div>
      <div className="segmented-control">
        <input type="radio" id="tab-1" name="tab" value="tab1" defaultChecked />
        <label className="segmented-control_1" htmlFor='tab-1'>
          <p>Tab 1</p>
        </label>
        <input type="radio" id="tab-2" name="tab" />
        <label className="segmented-control_2" htmlFor='tab-2'>
          <p>Tab 2</p>
        </label>
        <input type="radio" id="tab-3" name="tab" />
        <label className="segmented-control_3" htmlFor='tab-3'>
          <p>Tab 3</p>
        </label>
        <div className="segmented-control_color"></div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="btn btn-ripple_inside">Button</button>
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="btn btn-ripple_outside" ref={waveBtnRef} onClick={addWave}>
          <span>Button</span>
        </button>
      </div>
      <div className="search">
        <input type="checkbox" id="search_input_focus" ref={searchBtn} />
        <input type="text" className="search_input" autoFocus ref={searchInputRef} onBlur={searchInputBlur} />
        <label htmlFor='search_input_focus' onClick={searchInputFocus} className="search_btn">
          <img src={SearchSvg} />
        </label>
      </div>
      <div className="circle">
        <span className="circle_btn">
          <i className="pause"></i>
          <i className="play"></i>
          <i></i>
        </span>
        <span className="circle_back_1"></span>
        <span className="circle_back_2"></span>
      </div>
    </StyleDiv>
  )
}
