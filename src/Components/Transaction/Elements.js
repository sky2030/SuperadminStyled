import styled from 'styled-components';
import { Link, Link as LinkR } from 'react-router-dom';

export const PatientId = styled.div`
margin:0px;


`;

export const PatientDetail = styled.div`
  display: flex;
  background-color: #ffff;
  margin: 4px;
  border-radius: 10px;
  box-shadow: 5px 2px 6px #ccc;

    @media screen and  ( max-width:420px){
   border: 1px solid blue;
    display: flex;
    background-color: #ffff;
    margin: 4px;
    border-radius: 10px;
    box-shadow: 5px 2px 6px #ccc;
  }

`;

export const PatientList = styled.div`
 display: "flex";
  flex-wrap: wrap;
  width: 20vw;
  font-size: 14px;
  line-height: 4vh;

    @media screen and  ( max-width:420px){
   word-wrap: break-word;
   font-size: 11px;
  }

`;

export const PatientP = styled.p`
margin:0px;


`;

export const TransactionSpinner = styled.div`
justify-content:center;
align-items:center;
margin-top:150px;
margin-bottom:100px;

`;

export const TransactionImg = styled.img`
  float: left;
  padding: 0px 5px;

`;
export const PatientTransction = styled.p`
 width: 95vw;
  margin: 10px auto 60px auto;
  background: rgb(238, 238, 238);
  background: radial-gradient(
    circle,
    rgba(238, 238, 238, 1) 0%,
    rgba(215, 230, 246, 1) 100%
  );
  text-align: center;
  padding-bottom:15px;

`;

export const PatientBackBtn = styled(LinkR)`
 width: auto;
  float: left;
  margin-top: 8px;
  padding-left: 20px;
color: #fff;

`;

// export const BackLink = styled(LinkR)`
//  color: #fff;


// `;

export const BackI = styled.i`
margin-right:1px;


`;

export const Patientheader = styled.div`
 background-color: rgb(46 82 147);
  color: #fff;
  font-size: 20px;
  padding: 5px;
  text-align: center;

 
    @media screen and  ( max-width:420px){
  background-color: rgb(46 82 147);
    color: #fff;
    font-size: 20px;
    padding: 5px;
    text-align: center;
  }

`;

export const PatientItems = styled.div`
padding:0px;
 

`;


export const PatientItem = styled.div`
  display: flex;
  background-color: #ffff;
  margin: 4px;
  border-radius: 10px;
  box-shadow: 5px 2px 6px #ccc;
 
    @media screen and  ( max-width:420px){
 border: 1px solid blue;
    display: flex;
    background-color: #ffff;
    margin: 4px;
    border-radius: 10px;
    box-shadow: 5px 2px 6px #ccc;
  }

`;

export const PatientListHead = styled.div`
color: #0669b9;
  font-weight: bold;
   width: 20vw;
  font-size: 14px;
  line-height: 4vh;
 
    @media screen and  ( max-width:420px){
 word-wrap: break-word;
    margin-right: 5px;
    font-size: 11px;
  }

`;
export const PatientHospitalSelect = styled.select`
width: 8vw;
  color: #0669b9;
  font-weight: bold;
  border-width: 0px;
 

`;

export const PatientTransStatus = styled.option`
padding:0px;
 

`;

export const TransBotm = styled.div`
display: flex;
  justify-content: flex-end;
  align-items: center;
 

`;

export const TransBotmbutton = styled.button`
width: 8em;
  height: 2.5em;
  margin: 1em;
  border-radius: 0.5em;
  color: white;
  border-color: white;
  background-color: rgb(6, 105, 185);
 

`;




