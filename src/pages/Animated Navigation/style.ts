import styled from 'styled-components'

const StyleDiv = styled('div')`
  min-height: 100vh;
  background-color: #eafbff;
  background-image: linear-gradient(
    to bottom,
    #eafbff 0%,
    #eafbff 50%,
    #5290f9 50%,
    #5290f9 100%
  );
  display:flex;
  justify-content: center;
  align-items: center;
  
  .active{
    width:325px;
    height:2rem;
    transition: all .3s ease;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:2rem 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    .icon-esc{
      color: #5290f9;
      font-size:1.5rem;
      cursor: pointer;
    }
    .icon-biaoqing{
      cursor: pointer;
      color: #5290f9;
      font-size:1.5rem;
      display:none;
    }
    
    ul{
      list-style: none;
      display:flex;
    }
    ul>li{
      opacity: 1;
      width:4rem;
      transform: rotateY(0deg);
      transition: transform linear 300ms,opacity linear 300ms;
      a{
        text-decoration: none;
        color:#000;
      }
    }
  }
  .lines{
    margin-left:1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width:2rem;
    height:30px;
    
  }
  .line{
    display: inline-block;
    background-color: #5290f9;
    width:3px;
    height:28px;
    cursor: pointer;
  }

  .line1{
    position: absolute;
    z-index:1;
    transform: translate(0,0) rotate(45deg);
    transition: transform 300ms linear;
  }
  
  .line2{
    position: absolute;
    z-index:1;
    transform:translate(0) rotate(-45deg);
    transition: transform 300ms linear;
  }

  .trigger:checked~.active{
    width:100px;
  }
  .trigger:checked~.active>ul>li{
    transform:rotateY(360deg);
    opacity: 0;
  }
  
  
  .trigger:checked~.active .line1{
    transform: translate(-132px,-5px) rotate(630deg);
  }
  .trigger:checked~.active .line2{
    transform: translate(-132px,5px) rotate(-630deg);
  }
  
`

export default StyleDiv