import React from 'react'
import StyleDiv from './style'
import { useThrottle } from "../../hooks";

type Key = Partial<{
  key: string;
  keyCode: number;
  code: string;
}>

export default function Index() {
  const keyRef = React.useRef<HTMLDivElement>(null);
  const [show, setShow] = React.useState(false);
  const [keys, setKeys] = React.useState<Key>({});

  const throtteldKeyDown = useThrottle((event: KeyboardEvent) => {
    const { key, keyCode, code } = event;
    setShow(true);
    setKeys({ key, keyCode, code });
  }, 100);

  React.useEffect(() => {
    window.addEventListener("keydown", throtteldKeyDown);
    return function () {
      window.removeEventListener("keydown", throtteldKeyDown);
    }
  }, [throtteldKeyDown]);

  return (
    <StyleDiv>
      {!show && <div className="key" ref={keyRef}>
        <p> Press any key to get the keyCode</p>
      </div>}
      {show && <>
        <div>
          <div className="item-title">event.key</div>
          <div className="item-container">{keys.key}</div>
        </div>
        <div >
          <div className="item-title">event.keyCode</div>
          <div className="item-container">{keys.keyCode}</div>
        </div>
        <div >
          <div className="item-title">event.code</div>
          <div className="item-container">{keys.code}</div>
        </div>
      </>}
    </StyleDiv >
  )
}
