import styled from 'styled-components'

const StyleDiv = styled('div')`
  text-align: center;
  background:rgb(240,240,240);
  overflow: auto;

  h1{
    margin: 50px 0 30px;
    white-space: nowrap;
  }

  @media screen and (max-width:600px){
    h1{
      font-size:1.5rem;
    }
  }
  .faq-container{
    max-width:600px;
    margin:0 auto;
  }

  .faq{
    border:1px solid #9fa4a8;
    border-radius: 1rem;
    overflow: hidden;
    margin:20px auto;
    padding:30px;
    position: relative;
    transition:.3s ease;
  }
  /* 激活之后的Collapse中的背景 */
  .faq.active::before,.faq.active::after{
    content:'\f075';
    font-family: 'Font Awesome 5 Free';
    color: #2ecc71;
    font-size: 7rem;
    position: absolute;
    opacity: 0.2;
    top: 20px;
    left: 20px;
    z-index: 0;
  }
  .faq.active::before {
    color: #3498db;
    top: -10px;
    left: -30px;
    transform: rotateY(180deg);
  }
  .faq-title{
    margin-bottom:35px;
    background-color: red;
    position:relative;
  }

  .faq-text{
    display:none;
    margin:30px 0 0;
  }
  /*只有激活的Collapse才可以显示文字 */
  .faq.active .faq-text {
    display: block;
  }


`

export default StyleDiv