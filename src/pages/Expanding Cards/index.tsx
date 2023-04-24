import React from 'react'
import StyleDiv from './style'

export default function Index() {
  const [active, setActive] = React.useState(0);
  
  return (
    <StyleDiv>
      {new Array(5).fill(1).map((_, index) => <div key={index} className={active === index ? "panel active" : "panel"} onClick={() => setActive(index)}></div>)}
    </StyleDiv>
  )
}
