import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const NavHeader = styled.header`
 display: flex;
  overflow: hidden;
  margin-top: 0px;
  box-shadow: 0px 2px 2px #ccc;
  background-color: #fff;

  @media screen and  ( max-width:420px){
     display: flex;
    margin-top: 0px;
    box-shadow: 0px 2px 2px #ccc;
    background-color: #fff;
  }


`;

export const NavTitle = styled.div`
 margin: 0 auto;
  width: 80%;

  @media screen and  ( max-width:420px){
   width: 100%;
  }


`;

export const NavLogo = styled.div`
  float: left;
  width: 10vw;
  text-align: left;

  @media screen and  ( max-width:420px){
   float: left;
    width: 40vw;
    height: 10vh;
    margin: 0px 8em;
    text-align: left;
  }


`;

export const NavLink = styled(LinkR)`
margin:0.1px;




`;

export const NavImg = styled.img`
   width: 10vw;

  @media screen and  ( max-width:420px){
   width: 40vw;
    height: 10vh;
  }


`;



export const NavUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  float: right;




`;

export const NavLi = styled.li`
  width: 30vw;
  display: inline;
  padding: 10px;
  line-height: 50px;

  &:hover{
      background-color: #577ad8;
  }

  @media screen and  ( max-width:420px){
     display: flex;
    padding: 5px;
    width: 100vw;
    line-height: 20px;
    justify-content: center;
    background-color: rgba(22, 115, 190, 0.8);
    margin-right: 5px;
    border-bottom: 1px solid white;
  }


`;

export const NavulLink = styled(LinkR)`
  color: #000;
  text-decoration: none;
  font-size: 13px;


  @media screen and  ( max-width:420px){
     font-size: 20px;
    color: white;
  }


`;

export const NavI = styled.i`
 padding-right: 7px;
  font-size: 16px;
  color: rgb(22, 115, 190);

  &:hover{
     color: white;
  }

  @media screen and  ( max-width:420px){
     font-size: 15px;
    color: white;
  }


`;



export const NavDisplay = styled.div`
display:none;

@media screen and  ( max-width:768px){
  width: 45px;
  background-color: rgba(22, 115, 190, 0.8);
  display: none;
  position: absolute;
  right: 0px;
  font-size: 35px;
  top: 0px;
  color: white;
  display:block;
}


  @media screen and  ( max-width:420px){
       width: 50px;
    background-color: rgba(22, 115, 190, 0.8);
    display: block;
    position: absolute;
    right: 7px;
    font-size: 35px;
    top: 2px;
    display:block;
    color: white;
  }


`;