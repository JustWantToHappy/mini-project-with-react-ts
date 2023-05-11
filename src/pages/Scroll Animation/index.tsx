import React from 'react'
import { useThrottle } from '../../hooks';
import StyleDiv from './style'

export default function Index() {
  const elementsRef = React.useRef<Array<HTMLDivElement>>([]);
  const [list, setList] = React.useState<number[]>(Array(10).fill(0));

  const throttledScroll = useThrottle(() => {
    //检查每一个box的顶部到窗口顶部的距离是否< 4/5的clientHeight
    elementsRef.current.forEach((ele, index) => {
      const { top } = ele.getBoundingClientRect();
      const height = document.documentElement.clientHeight;
      if (top < height * 4 / 5) {
        list[index] = 1;
      } else {
        list[index] = 0;
      }
    });
    setList([...list]);
  }, 100);

  React.useEffect(() => {
    window.addEventListener("scroll", throttledScroll);
    return function () {
      window.removeEventListener("scroll", throttledScroll);
    }
  }, [throttledScroll]);

  React.useEffect(() => {
    list[0] = list[1] = 1;
    setList([...list]);
  }, []);

  return (
    <StyleDiv>
      <h1>Scroll to see the animation</h1>
      {list.map((num, index) => <div className={num === 0 ? "box" : "box show"} key={index} ref={element => elementsRef.current[index] = element!}></div>)}
    </StyleDiv >
  )
}
