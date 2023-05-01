import styled,{css} from 'styled-components'

const btnStyle = css`
    position: absolute;
    background-color: transparent;
    border:0;
    height:100px;
`;

const StyleDiv = styled('div')`
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
    position: relative;
    transition: transform 0.5s linear;
  }


  .container{
    transition: transform 300ms linear;
    transform-origin:top left;
    width:100%;
    min-height:100vh;
    padding:50px;
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
    /*position: absolute;
    z-index:-1;
    background-color: #ff7979;
    transform-origin: top left;
    transform: rotate(90deg);*/
    ul{
      list-style-type: none;
    }
    a{
      text-decoration: none;
      color: #fff;
    }
  }
  .show-nav~nav{
    /*position: fixed;*/
    /*transform: rotate(-90deg);*/
  }
`

export default StyleDiv