import styled from 'styled-components'

interface StyleProps{
  process: number;
}
const StyleDiv = styled('div')<StyleProps>`
background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  width:500px;
  border-radius: 5px;
  margin:0 auto;
  margin-top: 1rem;
  padding:1rem;
  height:50vh;
  display:grid;
  grid-template-columns: repeat(2,1fr);
  grid-auto-rows:3;
  .slider{
    cursor: pointer;
    &_box{
      width:100%;
      height:1rem;
      box-shadow: inset .2rem .2rem .5rem var(--greyLight-2), 
inset -.2rem -.2rem .5rem var(--white);
    border-radius: 1rem;
    position:relative;
    }
    &_btn{
      border:.5rem solid var(--white);
      width:2rem;
      height:2rem;
      border-radius: 50%;
      position:absolute;
      z-index:2;
      box-shadow: 0px .1rem .3rem 0px var(--greyLight-3);
      top:50%;
      left:${props=>props.process+"%"};
      transform: translateY(-50%);
      &:hover~.slider_tooltip{
        opacity: 1;
      }
    }
    &_color{
      position:absolute;
      border-radius: 1rem;
      height:100%;
      width:calc(${props=>props.process+"%"} + .5rem);
      background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
    }
    &_tooltip{
      opacity: 0;
      transition:opacity 300ms linear;
      position:absolute;
      width:2rem;
      height:2rem;
      border-radius: 3px;
      font-size:.5rem;
      top:2rem;
      left:${props=>props.process+"%"};
      display:flex;
      align-items: center;
      justify-content: center;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
  }
`

export default StyleDiv