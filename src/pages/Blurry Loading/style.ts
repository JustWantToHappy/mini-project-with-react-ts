import styled from 'styled-components'

const StyleDiv = styled('div')`
  .bg{
    background: url('https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80')
    no-repeat center center/cover;
    width:calc(100vw + 60px);
    height:calc(100vh + 60px);
    top:-30px;
    left:-30px;
    position: absolute;
    z-index:-1;
    filter:blur(0px);
  }
  .loading-text{
    width:100%;
    text-align: center;
    position: absolute;
    top:50vh;
    transform: translateY(-50%);
    font-size:50px;
    color:#fff;
  }
`

export default StyleDiv