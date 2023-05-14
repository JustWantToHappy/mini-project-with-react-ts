import styled from 'styled-components'

const StyleDiv = styled('div')`
  background-color: #e1e1e1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;

  .key{
    border:1px solid #fff;
    background-color: lightgray;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    padding: 20px;
    flex-direction: column;
    margin: 10px;
    min-width: 150px;
    color: white;
    position: relative;
  }

  .item-title{
    color:#555555;
    font-size:.8rem;
    font-weight:600;
  }
  .item-container{
    display:inline-flex;
    border:1px solid gray;
    background:#fff;
    padding:20px;
    margin:10px;
    min-width: 150px;
    min-height:4rem;
    align-items: center;
    justify-content: center;
    font-weight: 700;
  }
`

export default StyleDiv