import styled from 'styled-components'

const StyleDiv = styled('div')`
  display:flex;
  width:90vw;
  margin:10vh auto 0 auto;
  .panel{
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
    height:80vh;
    border-radius: 50px;
    color:#fff;
    cursor: pointer;
    flex:0.5%;
    margin:10px;
    position:relative;
    transition:all 700ms ease-in;
  }
  .active{
    flex:40%;
  }
  &>div:nth-child(1){
    background-image: url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')
  }
  &>div:nth-child(2){
    background-image: url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')
  }
  &>div:nth-child(3){
    background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')
  }
  &>div:nth-child(4){
    background-image: url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')
  }
  &>div:nth-child(5){
    background-image: url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')
  }
`

export default StyleDiv