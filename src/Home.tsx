import React from 'react'
import { Link } from "react-router-dom";
import MyContext from './context/index';
import styled from "styled-components";

const HomeBox = styled("div")`
  width:100%;
  *{
    margin:0 auto;
    margin-top:.5rem;
    width:70%;
  }
  .home-introduce{
    &>h1{
      text-align: center;
    }
    &>p{
      line-height: 1.5rem;
      text-indent: 2rem;
    }
  }
  .home-demo-links{
    list-style: none;
    margin-top:2rem;
    line-height: 2rem;
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
          个人的审美能力，哈哈哈，编不下去了，总之就是为了好玩。。。
        </p>
      </div>
      <div className="home-">
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
