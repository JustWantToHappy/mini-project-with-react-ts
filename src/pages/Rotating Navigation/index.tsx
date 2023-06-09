import React from 'react'
import CloseSvg from "../../assets/svg/close.svg";
import NavigateSvg from "../../assets/svg/navigate.svg";
import StyleDiv from './style'

export default function Index() {
  const [open, setOpen] = React.useState(false);

  const changeOpenState = () => {
    setOpen(preState => {
      return !preState;
    });
  }

  React.useEffect(() => {
    document.body.style.background = "#333333";
    return function () {
      document.body.style.background = "#fff";
    }
  }, []);
  return (
    <StyleDiv>
      <div className={!open ? "container" : "container show-nav"}>
        <div className="circle_container">
          <div className="circle">
            <button className="circle_open" onClick={changeOpenState}>
              <img src={NavigateSvg} alt="" />
            </button>
            <button className="circle_close" onClick={changeOpenState}>
              <img src={CloseSvg} alt="" />
            </button>
          </div>
        </div>

        <div className="content">
          <h1>Amazing Article</h1>
          <small>Florin Pop</small>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.</p>

          <h3>My Dog</h3>
          <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="doggy" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident. Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?</p>
        </div>
      </div>

      <nav>
        <ul>
          <li><i className="fas fa-home"></i><a href="#"> Home</a></li>
          <li><i className="fas fa-user-alt"></i><a href="#"> About</a></li>
          <li><i className="fas fa-envelope"></i><a href="#"> Contact</a></li>
        </ul>
      </nav>
    </StyleDiv>
  )
}
