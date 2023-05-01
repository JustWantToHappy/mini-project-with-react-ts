import styled,{css} from 'styled-components';

const stepBar = css`
  content:"";
  position: absolute;
  z-index:-1;
  top:50%;
  transform: translateY(-50%);
  height:2px;
`;

interface StyleProps{
  finishStep: number;
  steps: number;
}

const StyleDiv = styled('div') <StyleProps>`
  --box-size:300px;
  --border-size:4px;
  --option-size:2rem;
  
  width:100vw;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .steps{
    &_box{
      display:flex;
      justify-content: space-between;
      width:var(--box-size);
      position: relative;
      &::before{
        ${stepBar};
        width:var(--box-size);
        background-color: var(--greyLight-3);
      }
      &::after{
        ${stepBar};
        transition:width 300ms linear;
        background-color: var(--primary-dark);
        width:${props=>props.finishStep/(props.steps-1)*100+"%"};
      }
    }
    &_option{
      background-color: #fff;
      color:var(--greyDark);
      width:var(--option-size);
      height:var(--option-size);
      border-radius: 50%;
      border:var(--border-size) solid var(--border-bg);
      text-align: center;
      line-height: calc(var(--option-size) - 2*var(--border-size));
    }
    &_option_active{
      border:var(--border-size) solid var(--primary);
    }
    &_btns{
      padding-top:1rem;
      text-align: center;
      &>button{
        margin-left:1rem;
      }
    }
  }
`

export default StyleDiv