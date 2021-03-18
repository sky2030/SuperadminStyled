import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const SplashLink = styled(LinkR)`

`;

export const SplashBg = styled.div`
  background: #000428; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #004e92,
    #000428
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #004e92,
    #000428
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 96vh;
  width: 100%;
  justify-content: center;
  align-items: center;




`;


export const SplashImg = styled.img`
  margin-top: 40px;
  height: 55vmin;
  pointer-events: none;

  @media screen and  ( max-width:420px){
    margin-top: 25vh;
  }


`;

export const SplashPointer = styled.div`

`;

export const PointerImg = styled.img`
  margin-top: 0px;
  width: 2vw;
  color:#fff;
-webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
   
  @-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10vh);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10vh);
  }
}

  @media screen and  ( max-width:420px){
     margin-top: 1px;
    width: 7vw;
  }


`;