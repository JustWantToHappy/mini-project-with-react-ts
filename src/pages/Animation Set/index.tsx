import StyleDiv from "./style"

const Index = () => {
  return (
		<StyleDiv>
			<div className="box">
				<div className="bouncing-bar">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className="box">
				<div className="loading_circle">
					<div className="loading_circle_inner"></div>
					<div className="loading_circle_spin"></div>
				</div>
			</div>
			<div className="box">
				<div className="three_circle">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className="box">
				<div className="twinkle_dots">
				</div>
			</div>
		</StyleDiv>
  )
}

export default Index