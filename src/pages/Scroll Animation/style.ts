import styled from 'styled-components'

const StyleDiv = styled('div')`
  background-color: #efedd6;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100%;
  

  h1{
    margin:10px;
  }
  .box{
    background-color: steelblue;
    color:#fff;
    display:flex;
    align-items: center;
    justify-content: center;
    width:400px;
    height:200px;
    margin:10px;
    border-radius: 10px;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
    transform: translateX(400%);
    transition: transform 0.4s ease;
  }
  .box:nth-of-type(even){
    transform:translateX(-400%);
  }
  .box h2 {
    font-size: 45px;
  }
  .box.show{
    transform: translateX(0%);
  }

`

export default StyleDiv