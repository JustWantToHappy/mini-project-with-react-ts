import StyleDiv from './style'

export default function Index() {
  return (
    <StyleDiv>
      <div className="container">
        <h1>Please Login</h1>
        <form>
          <div className="form-control">
            <input type="text" required />
            <label>
              {"Email".split("").map((ch, index) => <span key={index} style={{ transitionDelay: `${index * 30}ms` }}>{ch}</span>)}
            </label>
          </div>

          <div className="form-control">
            <input type="password" required />
            <label>
              {"Password".split("").map((ch, index) => <span key={index} style={{ transitionDelay: `${index * 30}ms` }}>{ch}</span>)}
            </label>
          </div>
          <button className="btn">Login</button>
          <p className="text">
            Don't hava a account?&emsp;<a href="#">Register</a>
          </p>
        </form>
      </div>
    </StyleDiv>
  )
}
