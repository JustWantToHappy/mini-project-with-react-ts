import styled from 'styled-components'

const StyleDiv = styled('div')`
  --hover-width: 75%;
  --other-width: 25%;
  --speed: 1000ms;


  width:100vw;
  height:100vh;

  .split{
    overflow: hidden;
    background-repeat: no-repeat;
    position:absolute;
    width:50%;
    height:100%;
    
    &>.btn{
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      left:50%;
      top: 40%;
      transform: translateX(-50%);
      text-decoration: none;
      color: #fff;
      border: #fff solid 0.2rem;
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      width: 15rem;
      padding: 1.5rem;
    }
    &.left{
      left:0;
      background:url(https://50projects50days.com/projects/split-landing-page/ps.jpg);
      background-size:cover;
      &::before{
        content:"";
        position: absolute;
        width:100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
      }
      &>.btn:hover{
        background-color: red;
      }
    }
    &.right{
      right:0;
      background:url(https://50projects50days.com/projects/split-landing-page/xbox.jpg);
      background-size:cover;
      &::before{
        content:"";
        position:absolute;
        width:100%;
        height:100%;
      }
      &>.btn:hover{
        background-color: green;
      }
    }
  }
  h1{
    font-size: 4rem;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
  .split.left:hover{
    width: var(--hover-width);
    &~.split.right{
      width:var(--other-width);
    }
  }

  .split.right:hover{
    width:var(--hover-width);
    &~.split.left{
      width:var(--other-width);
    }
  }
  
  .split.right,
  .split.left,
  .split.right::before,
  .split.left::before {
    transition: all var(--speed) ease-in-out;
  }


  @media (max-width: 800px) {
  h1 {
    font-size: 2rem;
    top: 30%;
  }

  .btn {
    padding: 1.2rem;
    width: 12rem;
  }
}
`

export default StyleDiv