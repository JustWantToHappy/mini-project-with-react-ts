import React from 'react'
import { Link } from "react-router-dom";
import MyContext from './context/index';
import styled from "styled-components";

const HomeBox = styled("div")`
  width:100%;
  *{
    margin-top:.5rem;
  }
  text-align: center;
  .home-demo-links{
    list-style: none;
    display:flex;
    flex-direction: column;
  }
`;

export default function Home() {
  const routes = React.useContext(MyContext);
  return (
    <HomeBox>
      <div className="home-introduce">
        <h1>interesting-component-demos</h1>
        <p>这是一个有趣的</p>
      </div>
      <ul className="home-demo-links">
        {routes.map((route, index) => <li key={route}>
          <span>{index}.&nbsp;</span>
          <Link to={route} target="_blank">{route}</Link>
        </li>)}
      </ul>
    </HomeBox>
  )
}
