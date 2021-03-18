import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const Footer = styled.footer`
 width: 50%;
  border-top: 1px solid #000;
  border-bottom: 1px solid #ccc;
  margin-top: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #fff;
  background-color: #000;
  z-index: 100;



`;

export const FooterP = styled.p`
     font-size: 13px;
  text-align: center;
  padding: 2px;
  margin: 5px;

  @media screen and  ( max-width:420px){
      font-size: 14px;
  }


`;

export const FooterA = styled.a`
   color:white;
   text-decoration:none;
   margin-left:5px;

`;