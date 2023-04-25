import React from 'react'
import StyleDiv from './style'
import { useThrottle } from '../../hooks/index';

export default function Index() {
  const [active, setActive] = React.useState(0);
  const [throttleSetActive] = useThrottle(setActive, { delay: 300 });

  const handleClick = React.useCallback((index: number) => {
    throttleSetActive(index);
  }, [throttleSetActive]);

  return (
    <StyleDiv>
      {new Array(5).fill(1).map((_, index) => <div key={index} className={active === index ? "panel active" : "panel"} onClick={() => handleClick(index)}></div>)}
    </StyleDiv>
  )
}
