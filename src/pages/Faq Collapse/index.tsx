import StyleDiv from './style'
import React from "react"

const data = [
  {
    id: "1",
    title: " Why shouldn't we trust atoms?",
    text: " They make up everything"
  },
  {
    id: "2",
    title: " What do you call someone with no body and no nose?",
    text: " Nobody knows."
  },
  {
    id: "3",
    title: "    What's the object-oriented way to become wealthy?",
    text: " Inheritance."
  },
  {
    id: "4",
    title: "How many tickles does it take to tickle an octopus?",
    text: "Ten-tickles!"
  },
  {
    id: "5",
    title: "  What is: 1 + 1?",
    text: "  Depends on who are you asking."
  },
]

export default function Index() {
  const [opens, setOpens] = React.useState<string[]>([]);
  const faqs = React.useRef<Array<{ id: string, current: HTMLDivElement }>>(null);

  const showText = (id: string) => {
    opens.push(id);
    console.info(opens, 'hhh')
    setOpens([...opens]);
  }
  const hiddenText = (id: string) => {
    const newOpens = opens.filter(oldId => oldId !== id);
    setOpens(newOpens);
  }

  return (
    <StyleDiv>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {data.map(item => <div
          key={item.id}
          className={opens.includes(item.id) ? "faq active" : "faq"}
          ref={current => faqs.current?.push({ id: item.id, current: current as HTMLDivElement })
          }>
          <h3 className="faq-title">
            {item.title}
          </h3>
          <p className="faq-text">
            {item.text}
          </p>
          <button className="faq-toggle">
            <i className="iconfont icon-esc" onClick={() => hiddenText(item.id)}></i>
            <i className="iconfont icon-xiangxia" onClick={() => showText(item.id)}></i>
          </button>
        </div>)}
      </div>
    </StyleDiv>
  )
}
