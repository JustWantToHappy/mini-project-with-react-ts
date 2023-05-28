import React from 'react'
import { Link } from "react-router-dom";
import MyContext from './context/index';
import styled from "styled-components";

const HomeBox = styled("div")`
  width:100%;
  overflow: hidden;
  background: #403B4A;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #E7E9BB, #403B4A);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #E7E9BB, #403B4A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
  *{
    margin:0 auto;
    margin-top:.5rem;
    width:70%;
  }
  .home-introduce{
    &>h1{
      text-align: center;
      white-space: nowrap;
      font-size:2rem;
      margin-bottom: 1rem;
    }
    &>p{
      line-height: 1.5rem;
      text-indent: 2rem;
      text-align: justify;
      letter-spacing: 1px;
    }
  }
  .home-demo-links{
    list-style: none;
    margin-top:2rem;
    line-height: 2rem;
    span{
      font-size:1rem;
      margin-right:1rem;
    }
  }
  a{
    color: #531616;
    &:hover{
      color:#fff;
      text-decoration: underline;
      text-underline-offset: 5px;
    }
  }
  @media screen and (max-width:768px){
    div{
      width:90%;
    }
  }
  
`;

export default function Home() {
  const routes = React.useContext(MyContext);
  return (
    <HomeBox>
      <div className="home-introduce">
        <h1>interesting-component-demos</h1>
        <p>
          这是一个有趣的mini项目,有一些有用好看的demo,结合了50projects50days的部分项目以及
          个人在各大设计网站上和codepen上博主的作品,目的是为了巩固react+ts+css的使用,同时为了提高
          个人的审美能力(css强迫症得治一下了。。。),前期使用css-in-js管理样式,后来接触了tailwindcss之后就打算使用tailwindcss啦,使用tailwindcss的
          初衷也是为了在后面的项目中快速上手tailwind。哈哈哈，实际上就是为了偷懒。
        </p>
      </div>
      <ul className="home-demo-links">
        {routes.map((route, index) => <li key={route}>
          <span>{index + 1}.&nbsp;</span>
          <Link to={route} target="_blank">{route}</Link>
        </li>)}
      </ul>
    </HomeBox>
  )
}
