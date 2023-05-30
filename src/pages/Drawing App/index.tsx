import React from 'react'
import styles from "./index.module.css";
let isPress = false;

export default function Index() {
  const [penSize, setPenSize] = React.useState(1);
  const [context, setContext] = React.useState<CanvasRenderingContext2D>();
  const [color, setColor] = React.useState("#000000");
  //保存的线条坐标点
  const [points, setPoints] = React.useState<number[][]>([]);

  const canvas = React.useRef<HTMLCanvasElement>(null);

  const changeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  }

  const handelClear = () => {
    context?.clearRect(0, 0, canvas.current?.width || 0, canvas.current?.height || 0);
    setPoints([]);
  }

  const createContext = () => {
    const ctx = (canvas.current as HTMLCanvasElement).getContext("2d") as CanvasRenderingContext2D;
    setContext(ctx);
  }

  const handleMouseMove = React.useCallback((event: MouseEvent) => {
    if (isPress) {
      const { offsetX, offsetY } = event;
      const top = points[points.length - 1];
      if (top?.length >= 2) {
        const priorX = top[top.length - 2], priorY = top[top.length - 1];
        context?.beginPath();
        context?.moveTo(priorX, priorY);
        context?.lineTo(offsetX, offsetY);
        context?.stroke();
        top.push(offsetX, offsetY);
        setPoints(prePoints => {
          prePoints.pop();
          prePoints.push(top);
          return [...prePoints.map(pointGroup => [...pointGroup])];
        });
      }
    }
  }, [context, points]);

  const handleMouseDown = React.useCallback((event: MouseEvent) => {
    const { offsetX, offsetY } = event;
    points.push([offsetX, offsetY]);
    setPoints([...points]);
    isPress = true;
  }, [points]);

  const handleMouseUp = React.useCallback(() => {
    isPress = false;
  }, []);

  React.useEffect(() => {
    createContext();
    canvas.current?.addEventListener("mousedown", handleMouseDown);
    canvas.current?.addEventListener("mousemove", handleMouseMove);
    canvas.current?.addEventListener("mouseup", handleMouseUp);
    return function () {
      canvas.current?.removeEventListener("mousedown", handleMouseDown);
      canvas.current?.removeEventListener("mousemove", handleMouseMove);
      canvas.current?.removeEventListener("mouseup", handleMouseUp);
    }
  }, [handleMouseDown, handleMouseMove, handleMouseUp]);

  React.useMemo(() => {
    if (context) {
      context.lineWidth = penSize;
    }
  }, [penSize, context]);

  React.useMemo(() => {
    if (context) {
      context.strokeStyle = color;
      context.lineCap = "round";
    }
  }, [color, context]);

  return (
    <div className="flex justify-center flex-col items-center">
      <canvas
        ref={canvas}
        width="800"
        height="700"
        className="border-2 border-[steelblue]"
      ></canvas>
      <div className={styles.toolbox + " flex w-[804px] bg-[steelblue] p-4"}>
        <button onClick={() => setPenSize(penSize => Math.max(penSize - 5, 1))}>-</button>
        <span >{penSize}</span>
        <button onClick={() => setPenSize(penSize => penSize + 5)}>+</button>
        <input type="color" onChange={changeColor} />
        <button className="" onClick={handelClear}>X</button>
      </div>
    </div>
  )
}
