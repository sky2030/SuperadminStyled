import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const DashboardWrapper = styled.div`
  width: 94vw;
  display: flex;
  margin: 5px auto;
  position: relative;
  @media screen and  ( max-width:420px){
     width: 94vw;
    flex-direction: column;
  }
`;




export const DashboardImg = styled.img`
     width: 100%;
    height: 86vh;
    background-size: cover;

@media screen and  ( max-width:420px){
    width: 100%;
    height: 30vh;
    background-size: cover;
  }

`;



export const DashboardItems = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 60%;
  float: left;
  position: absolute;
  left: 40px;
  top: 170px;
  

@media screen and  ( max-width:420px){
    clear: both;
    width:100%;
    left: 15px;
    top: 260px;
  }

`;

export const DashboardItem = styled.li`
  display: inline-block;
  width: 50%;
  text-align: left;

@media screen and  ( max-width:420px){
   width: 100%;
  }

`;


export const DashboardLink = styled(LinkR)`
     width: 87%;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  background-color: rgba(22, 115, 190, 0.8);

  margin: 2%;
  border-radius: 5px;
  display: inline-block;
  font-weight: bold;
  height:45px;
  padding:10px;
  align-content:flex-start;
justify-content:flex-start;


  &_i{
    margin-right:10px
  }



`;

export const DashboardI = styled.i`
 margin-right:5px;
 font-size:18px;




`;