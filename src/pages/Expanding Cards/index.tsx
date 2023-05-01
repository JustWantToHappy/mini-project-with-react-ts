import React from 'react'
import _ from "lodash";
import StyleDiv from './style'

export default function Index() {
  const [active, setActive] = React.useState(0);

  const handleClick = (index: number) => {
    _.throttle(() => setActive(index), 300)();
  }

  return (
    <StyleDiv>
      {new Array(5).fill(1).map((_, index) =>
        <div
          key={index}
          className={active === index ? "panel active" : "panel"}
          onClick={() => handleClick(index)}
        >
        </div>
      )}
    </StyleDiv>
  )
}
