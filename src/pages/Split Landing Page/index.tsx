import StyleDiv from './style';

export default function Index() {
  return (
    <StyleDiv>
      <div className="split left">
        <h1>Playstation 5</h1>
        <a href="#" className="btn">Buy Now</a>
      </div>
      <div className="split right">
        <h1>XBox Series X</h1>
        <a href="#" className="btn">Buy Now</a>
      </div>
    </StyleDiv>
  )
}
