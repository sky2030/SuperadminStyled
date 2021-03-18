import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const HospitalWrap = styled.div`
   width: 80vw;
  margin: 0px auto;
  display: flex;
  flex-direction: row;

  @media screen and  ( max-width:420px){
       width: 75vw;
    flex-direction: column;
  }


`;

export const HospitalBack = styled(LinkR)`
width: 8vw;
  height: 5vh;
  background-color: rgb(6, 105, 185);
  color: white;
  padding: 0.4rem;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1em;
  margin-top: 10px;
/* margin-right: 30px; */

  @media screen and  ( max-width:420px){
    width: 72vw;
    height: 4vh;
  }


`;

export const HospitalBackIcon = styled.i`
font-size:14px;
margin-right:5px; 
`;

export const Hospitalb = styled.b`
margin:0px;



`;



export const HospitalBanner = styled.div`
margin-top: 1.7em;
  margin-left: 1em;
  position: relative;
  width: 40vw;
  display: flex;
  height: 55vh;

  @media screen and  ( max-width:420px){
        width: 70vw;
    height: 22vh;
    border-radius: 2px;
    margin-left: 5px;
  }


`;

export const HospitalImg = styled.img`
width: 40vw;
  border-radius: 10px;

  box-shadow: 2px -2px 3px #999;

  @media screen and  ( max-width:420px){
      width: 70vw;
    border-radius: 2px;
  }


`;

export const HospitalFlex = styled.div`
 margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  /* background-color: #fff; */

  @media screen and  ( max-width:420px){
     margin-top: 10px;
  }


`;

export const HospitalItems = styled.div`
 width: 90%;
  background: rgb(238, 238, 238);
  background: radial-gradient(
    circle,
    rgba(238, 238, 238, 1) 0%,
    rgba(215, 230, 246, 1) 100%
  );

  margin: 15px;
  padding: 15px;
  text-align: left;
  border-radius: 10px;
   /* box-shadow: 1px 0px 4px #999;
  border: 1px solid #999; */

  @media screen and  ( max-width:420px){
     width: 75vw;
  }


`;

export const HospitalHeader = styled.h2`
 margin-bottom: 10px;
  font-size: 17px;


`;

export const HospitalP = styled.p`
 line-height: 25px;
  font-size: 15px;
`;


export const HospitalPIcon = styled.i`
color: rgba(22, 115, 190);
  padding-right: 8px;



`;



