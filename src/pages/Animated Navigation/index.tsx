import StyleDiv from './style'

export default function Index() {
  return (
    <StyleDiv>
      <input type="checkbox" style={{ display: "none" }} id="trigger" className="trigger" />
      <nav className="active">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <label htmlFor="trigger">
          <i className="iconfont icon-esc"></i>
          <i className="iconfont icon-shijian"></i>
        </label>
      </nav>
    </StyleDiv>
  )
}
