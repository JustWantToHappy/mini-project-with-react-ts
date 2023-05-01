import styled from 'styled-components'

interface StyleProps{
  process: number;
}
const StyleDiv = styled('div')<StyleProps>`
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  width:600px;
  border-radius: 5px;
  margin:0 auto;
  margin-top: 1rem;
  padding:1rem;
  display:grid;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows:3;
  grid-column-gap: 1rem;
  grid-row-gap:3rem;
  //拖动条
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
  //开关按钮
  .switch{
    --padding:5px;
    --container-height:2rem;
    --container-width:4rem;
    --btn-size:calc(2rem - 2*var(--padding));

    position: relative;
    margin:0 auto;
    &>input{
      position: absolute;
      opacity: 0;
      &:checked~.switch_box{
        background-color: var(--primary);
        .switch_btn{
          left:calc(var(--container-width) - var(--btn-size) - var(--padding));
          background-color: #fff;
        }
      }
    }
    &_box{
      &>label{
        position: absolute;
        width:100%;
        height:100%;
        left:0;
        top:0;
        z-index:1;
        cursor: pointer;
        border-radius: 1rem;
      }
      &>input{
        display: none;
        position: absolute;
      }
      transition: background 300ms ease;
      position:relative;
      border-radius: 1rem;
      width:var(--container-width);
      height:var(--container-height);
      box-shadow: 0px .1rem .3rem 0px var(--greyLight-3);
      padding:var(--padding);
    }
    &_btn{
      position: absolute;
      border-radius: 50%;
      left:var(--padding);
      transition:all 200ms linear;
      width:var(--btn-size);
      height:var(--btn-size);
      background-color: var(--greyDark);
    }
  }
  //分段切换按钮
  .segmented-control{
    height:4rem;
    box-shadow: .3rem .3rem .6rem var(--greyLight-2);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    position: relative;
    input{
      display: none;
    }
    &>input:checked+label{
      transition: all .5s ease;
      color:var(--primary);
    }
    &_1,&_2,&_3{
      width:6.8rem;
      height:3.6rem;
      font-size:1.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: var(--greyLight-2);
      transition: all .5s ease;
      &:hover{
        color:var(--primary);
      }
    }
    &_color{
      position:absolute;
      height: 3.4rem;
      width: 6.2em;
      margin-left:.3rem;
      border-radius: .8rem;
      box-shadow: inset .2rem .2rem .5rem var(--greyLight-2);
    }
    &>input:nth-of-type(1):checked~.segmented-control_color{
      transform: translateX(0);
      transition: transform 0.3s ease;
    }
    &>input:nth-of-type(2):checked~.segmented-control_color{
      transform: translateX(6.8rem);
      transition: transform 0.3s ease;
    }
    &>input:nth-of-type(3):checked~.segmented-control_color{
      transform: translateX(13.6rem);
      transition: transform 0.3s ease;
    }
  }
  
  .btn{
    //按钮公共样式
    font-size:1.1rem;
    background-color: var(--primary-dark);
    letter-spacing: 1px;
    border:none;
    color:var(--white);
    border-radius: .5rem;
    width:5rem;
    height:2.5rem;
    &-ripple{
      /* 点击后按钮内部出现波纹 */
      &_inside{
        box-shadow: 0 2px 0 rgba(5,145,255,.1);
        position: relative;
      }
      &_inside:focus:not(:active)::after {
        content: "";
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        animation: ripple_inside 0.6s linear;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
      }
      /* 点击按钮后按钮外部出现波纹 */
      &_outside{
        position: relative;
        &_ripple{
          width:100%;
          height:100%;
          position:absolute;
          left:0;
          top:0;
          border-radius: .5rem;
          animation:ripple_outside 300ms linear;
        }
      }
      @keyframes ripple_outside{
        from{
          box-shadow:none;
        }
        to{
          opacity: 0;
          box-shadow: 0 0 5px 7px var(--primary);
        }
      }
      @keyframes ripple_inside{
        0%{
          width:0;
          height:0;
        }
        50%{
          width:3rem;
          height:3rem;
        }
        100%{
          width:5rem;
          height:5rem;
          opacity: 0;
        }
      }
    }
  }
  /* 搜索输入框 */
  .search{
    --input-width:12rem;
    --input-height:2rem;
    --btn-width:1.5rem;
    position:relative;
    width:var(--input-width);
    height:var(--input-height);
    
    input[type=checkbox]{
      display:none;
      position:absolute;
      z-index:1;
    }
    /* 点击搜索图标时候 */
    input[type=checkbox]:checked~.search_input{
      opacity: 1;
      width:100%;
    }
    input[type=checkbox]:checked~.search_btn{
      left:calc(100% - var(--btn-width)*1.5);
    }
    &_input{
      position:absolute;
      left:0;
      top:0;
      width:0%;
      height:100%;
      opacity: 0;
      border-radius: 1rem;
      padding-left:.5rem;
      border:1px solid var(--primary);
      transition: all 300ms ease;
    }
    &_btn{
      position: absolute;
      height:100%;
      display:flex;
      align-items: center;
      left:0;
      img{
        cursor: pointer;
        width:var(--btn-width);    
      }
      transition: all 300ms ease;
    }
  }
`

export default StyleDiv