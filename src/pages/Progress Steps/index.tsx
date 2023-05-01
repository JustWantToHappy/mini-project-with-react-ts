import React from 'react'
import { Button } from "antd";
import StyleDiv from './style'

export default function Index() {
  const steps = 4;
  const [step, setStep] = React.useState(1);
  const handleClickPrev = () => {
    const prev = Math.max(0, step - 1);
    setStep(prev);
  }
  const handleClickNext = () => {
    const next = Math.min(steps, step + 1);
    setStep(next);
  }

  return (
    <StyleDiv finishStep={Math.max(0, step - 1)} steps={steps}>
      <div className="steps">
        <div className="steps_box">
          {new Array(steps).fill(1).map((_, index) => <div
            className={step >= (index + 1) ? "steps_option steps_option_active" : "steps_option"}>
            {index + 1}
          </div>)}
        </div>
        <div className="steps_btns">
          <Button
            type="primary"
            disabled={step === 1 ? true : false}
            onClick={handleClickPrev}
          >
            Prev
          </Button>
          <Button
            type="primary"
            disabled={step === steps ? true : false}
            onClick={handleClickNext}
          >
            Next
          </Button>
        </div>
      </div>
    </StyleDiv>
  )
}
