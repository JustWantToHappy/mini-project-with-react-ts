import styled,{css} from 'styled-components'

const btnStyle = css`
    position: absolute;
    background-color: transparent;
    border:0;
    height:100px;
`;

const StyleDiv = styled('div')`
  width:100%;
  .circle {
    &_container{
      position:fixed;
      top:-100px;
      left:-100px;
    }
    &>button{
      ${btnStyle};
      img{
        width:2rem;
      }
    }
    &_open{
      left:60%;
      top:50%;
    }
    &_close{
      left:50%;
      top:60%;
      transform-origin: top left;
      transform: rotate(90deg);
    }
    background-color: #ff7979;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    transition: transform 0.5s linear;
  }


  .container{
    transition: transform .4s linear;
    transform-origin:top left;
    width:100%;
    min-height:100vh;
    padding:50px;
    background-color: #fff;
  }
  //文章内容rotate
  .container.show-nav{
    transform: rotate(-20deg);
  }
  .container.show-nav .circle {
    transform: rotate(-70deg);
  }
  .content{
    max-width:1000px;
    margin:50px auto;
    img{
      max-width:100%;
    }
    p{
      text-indent: 2rem;
      text-align: justify;
      line-height: 1.5rem;
    }
    small{
      display:block;
      padding:1rem 0;
    }
    h3{
      padding:1rem 0;
    }
  }
  nav{
    position:fixed;
    bottom:40px;
    left:0;
    z-index:100;
    ul{
      list-style: none;
      padding-left:30px;
      li{
        margin:40px 0;
        transform: translateX(-200%);
        transition: transform .4s ease-in;
        a{
          color:#fff;
          text-decoration: none;
        }
      }
    }
  }
  .show-nav~nav{
    ul>li:nth-of-type(1){
      transform: translateX(50%);
    }
    ul>li:nth-of-type(2){
      transform: translateX(75%);
    }
    ul>li:nth-of-type(3){
      transform: translateX(85%);
    }
  }
`

export default StyleDiv