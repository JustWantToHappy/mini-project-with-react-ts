import styled from 'styled-components'

const StyleDiv = styled('div')`
  height:100vh;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: steelblue;
  color:#fff;

  .container{
    background-color: rgba(0,0,0,.4);
    padding:20px 40px;
    border-radius: 5px;
    h1{
      text-align: center;
      margin-bottom:30px;
    }
    a{
      text-decoration: none;
      color:lightblue;
    }
  }
  .btn{
    cursor: pointer;
    display: inline-block;
    width:100%;
    padding:15px;
    border: 0;
    border-radius: 5px;
    background-color: lightblue;
    &:active{
      transform: scale(0.98);
    }
  }
  .text{
    margin-top:30px;
  }

  .form-control{
    position:relative;
    width:300px;
    margin:20px 0 40px;
    input{
      background-color: transparent;
      border:0;
      border-bottom:2px #fff solid;
      display: block;
      width:100%;
      padding:15px 0;
      font-size:18px;
      color: #fff;
    }
    input:focus{
      border-bottom-color: lightblue;
    }

    label{
      position:absolute;
      top:15px;
      left:0;
      pointer-events: none;
    }

    label span{
      display: inline-block;
      font-size:18px;
      min-width:5px;
      /* 贝塞尔曲线函数，计算机图形学里面的东西 */
      transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    input:focus+label span{
      color:lightblue;
      transform: translateY(-30px);
    }
  }
`

export default StyleDiv