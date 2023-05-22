import styled from 'styled-components'

const StyleDiv = styled('div')`
  min-height: 100vh;
  /*background-color: #eafbff;
  background-image: linear-gradient(
    to bottom,
    #eafbff 0%,
    #eafbff 50%,
    #5290f9 50%,
    #5290f9 100%
  );*/
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
    /*overflow: hidden;*/
    padding:2rem 1rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

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
    position:relative;
    margin-left:1rem;
    display: flex;
  }
  .line{
    display: inline-block;
    background-color: #5290f9;
    width:3px;
    height:30px;
    cursor: pointer;
  }

  .line1{
    position: absolute;
    transform: rotate(45deg) translateY(0);
    transition: transform 300ms linear;
  }
  
  .line2{
    transform: rotate(-45deg) translateY(0);
    transition: transform 300ms linear;
  }

  .trigger:checked~.active{
    width:200px;
  }
  .trigger:checked~.active>ul>li{
    transform:rotateY(360deg);
    opacity: 0;
    display: none;
  }
  
  
  .trigger:checked~.active .line1{
    transform: rotate(765deg) translateY(-5px);
  }
  .trigger:checked~.active .line2{
    transform: rotate(-765deg) translateY(5px);
  }
  
`

export default StyleDiv