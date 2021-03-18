import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const LoginSection = styled.section`
background-color: #f5f5f5;
  width: 50%;
  margin: 80px auto;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0px 5px 17px #999;
 

  @media screen and  ( max-width:420px){
    width: 90%;
  }


`;

export const LoginImg = styled.img`
margin:0px;




`;

export const LoginHeader = styled.h2`
 color: #525252;
  text-align: center;
  margin-top: 5px;




`;

export const LoginForm = styled.form`
 height: auto;
  width: 31vw;
  margin: 20px auto;
 

  @media screen and  ( max-width:420px){
    width: 90%;
    display:flex;
    flex-direction:column
  }


`;

export const LoginBox = styled.div`
float: left;
  /* width: 29vw; */
  text-align: left;
 




`;

export const LoginI = styled.i`
  position: absolute;
  z-index: 1;
  padding: 11px 13px;
  color: rgb(22, 115, 190);
 




`;

export const LoginInput = styled.input`
 padding-left: 35px;
  font-size: 14px;
  width: 29vw;
  height: 40px;
  margin-bottom: 10px;
   border: 1px solid #ccc;
   
   

    /* width: 70%;
  height: 40px;
  border-radius: 4px;
 
  margin-top: 5px;
  padding: 5px; */

  @media screen and  ( max-width:420px){
       width: 68vw;
  }


`;

export const LoginP = styled.p`
 position: relative;
  z-index: 1;
  padding: 16px 4px;
  color: rgb(22, 115, 190);
  



`;


export const LoginDiv = styled.div`
display:flex;





`;

export const PasswordBox = styled.div`
display:flex;
/* width:30vw; */
/* overflow-x:visible; */
/* z-index:2; */

  @media screen and  ( max-width:420px){
   width:90vw;
  }


`;

export const LoginTitle = styled.div`
margin:0.1px;


`;

export const LoginSubmit = styled.div`
margin:0.1px;
/* display:flex;
justify-content:center; */




`;

export const LoginNew = styled.div`
font-size:12px;
color:red;
margin-bottom:5px;
margin-right:7em;




`;

export const LoginButton = styled.button`
  background-color: rgb(22, 115, 190);
  font-size: 15px;
  border: 0px;
  height: 40px;
  margin: 15px 20px 15px -20px;
  color: #fff;
  border-radius: 20px;
  padding: 7px 15px;
  cursor: pointer;
width: 27vw;

  @media screen and  ( max-width:420px){
       width: 100%;
       border-radius:0px;
       margin:15px 0px;
  }


`;