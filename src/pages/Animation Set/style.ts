import styled from "styled-components"

export default styled("div")`
	width:60vmax;
	margin:auto;
	margin-top:5vh;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 3rem;
	background-color: var(--greyLight-1);
	padding:2rem;
	.box{
		width:200px;
		height:200px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 1px 1px 3px 1px rgba(0,0,0,.1);
	}
	.loading{
		&_circle{
			position:relative;
			width:80px;
			height:80px;
			background-color:var(--border-bg);
			border-radius: 50%;
			&_inner{
				width:60px;
				height:60px;
				background-color: var(--white);
				border-radius: 50%;
				position: absolute;
				top:10px;
				left:10px;
				z-index:2;
			}
			&_spin{
				width:40px;
				height:40px;
				background-color: var(--primary-light);
				border-radius: 40px 0 0;
				position: absolute;
				z-index:1;
				transform-origin:bottom right;
				animation: spin 1000ms infinite linear;
			}
		}
		@keyframes spin {
			from{
				transform: rotateZ(0deg);
			}
			to{
				transform: rotateZ(360deg);
			}
		}
	}
	.bouncing-bar{
		display: grid;
		column-gap: 4px;
		grid-template-columns: repeat(4,1fr);
		&>span{
			display: inline-block;
			width:4px;
			height:15px;
			border-radius: 2px;
			background-color: var(--primary-light);
			animation: bouncing 1000ms ease-in-out infinite;
		}
		&>span:nth-child(2){
			animation-delay: .2s;
		}
		&>span:nth-child(3){
			animation-delay: .3s;
		}
		&>span:nth-child(4){
			animation-delay: .4s;
		}
		@keyframes bouncing{
			0%{
				transform: scale(1);
			}
			20%{
				transform: scale(1,2);
			}
			40%{
				transform: scale(1);
			}
		}
	}
	.three_circle{
		height:30px;
		width:100px;
		border-radius: 15px;
		display: flex;
		justify-content: space-between;
		position: relative;
		animation: rotate 2000ms infinite ease-in-out;
		transform-origin: 50% 50%;
		align-items: center;
		
		&>div{
			width:15px;
			height:15px;
			border-radius: inherit;
		}
		&>div:first-child,&>div:last-child{
			background-color: var(--greyLight-2);
		}
		&>div:nth-child(2){
			position: absolute;
			left:50%;
			top:50%;
			transform: translate(-50%,-50%);
			animation-play-state: paused;
			background-color: var(--primary-light);
		}
		@keyframes rotate {
			0%{
				transform: rotateZ(0deg);
			}
			40%{
				transform: rotateZ(180deg);
			}
			50%{
				transform: rotateZ(180deg);
			}
			90%{
				transform: rotateZ(360deg);
			}
			100%{
				transform: rotateZ(360deg);
			}
		}
	}
	.twinkle_dots{
		position: relative;
		width:20px;
		height:20px;
		border-radius: 50%;
		background-color: var(--primary-light);
		animation: twinkle-middle 1000ms linear infinite;
		
		&::before{
			content:"";
			position: absolute;
			width:20px;
			height:20px;
			border-radius: 50%;
			left:-30px;
			background-color: var(--primary-light);
			animation: twinkle-left 1000ms linear infinite;
		}
		&::after{
			content:"";
			position:absolute;
			width:20px;
			height:20px;
			border-radius: 50%;
			left:30px;
			background-color: var(--primary-light);
			animation: twinkle-right 1000ms linear infinite;
		}
		@keyframes twinkle-middle {
			0% { opacity: 1; }
			33% { opacity: 0.25; }
			66% { opacity: 0.25; }
			100% { opacity: 1; }
		}
		@keyframes twinkle-left{
			0%{
				opacity: 0.25;
			}
			33%{
				opacity: 1;
			}
			66%{
				opacity: 0.25;
			}
		}
		@keyframes twinkle-right{
			33%{
				opacity: 0.25;
			}
			66%{
				opacity: 1;
			}
			100%{
				opacity: 0.25;
			}
		}
	}
`;