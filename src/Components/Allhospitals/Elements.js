import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const HospitalCard = styled(LinkR)`
   flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 5px;
  box-shadow: 4px -2px 7px #999;
  border-radius: 5px;
  margin: 10px;
  text-decoration: none;
  color: rgb(6, 105, 185);





`;

export const HospitalCardHeader = styled.h4`
  background-color: rgb(6, 105, 185);
  padding: 5px;
  margin-bottom: 10px;
  text-align: center;
  color: white;



`;


export const HospitalSubhead = styled.div`
flex-direction: row;
  display: flex;




`;

export const HospitalItems = styled.div`
margin:0px;




`;

export const HospitalImg = styled.img`
  width: 10vw;
  height: 15vh;
  margin-left: 5px;
  margin-right: 10px;
  box-shadow: 2px -2px 3px #999;

  @media screen and  ( max-width:420px){
    width: 35vw;
    height: 15vh;
  }


`;

export const HospitalDetails = styled.div`
  float: left;
  padding: 0px 5px;
  align-content: center;
  justify-items: center;
  /* margin-bottom: 2rem; */




`;

export const DetailsHeader = styled.h5`
font-weight:bold;
color:black;



`;

export const DetailsP = styled.p`
  width: 190px;
  word-break: break-word;
  line-height: 20px;
  padding-bottom: 3px;
  color:black;
  padding: 0;
  font-size: 14px;
  line-height: 23px;
  text-align: left;


`;

export const HospitalWrapper = styled.div`
 width: 95vw;
  display: flex;
  margin: 5px auto;

  @media screen and  ( max-width:420px){
   width: 90vw;
    flex-direction: column;
  }


`;

export const HospitalDiv = styled.div`
margin-left:0px;

  @media screen and  ( max-width:420px){
  margin-right:5px;
  }


`;

export const HospitalSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgb(233, 220, 220);
  font-weight: bold;
  width: 100%;
  /* justify-content: center; */
  /* background-color: yellow; */

   @media screen and  ( max-width:420px){
 margin-right:20px;

  }


`;

export const HospitalIcon = styled.i`
position: absolute;
  background-color: rgba(40, 110, 167, 0);
margin-bottom:4px;
  height: 40px;
  /* border-radius: 4px; */
  /* border: 1px solid #ccc; */
  z-index: 1;
  padding: 10px 10px;
  color: #837c7c;
 /* margin-right: 14em; */
 margin-top: 10px;
 /* font-size: 10px; */


`;

export const HospitalInpHeader = styled.i`
margin:1px;


`;


export const HospitalSearchInput = styled.input`
width: 100%;
background-color: white;
/* box-shadow: blue; */
 box-shadow: 1px 2px rgba(42, 128, 199, 0.9);
border-width: 5px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 10px;
  padding: 5px;
  align-items: center;
 color: black;
 padding-left: 30px;
 margin-bottom: 8px;

    @media screen and  ( max-width:420px){
    width:90vw;
  }


`;

export const HospitalFlexcontainer = styled.div`
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

export const HospitaladdLink = styled(LinkR)`
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  background-color: rgb(6, 105, 185);
  padding: 10px 15px;
  border-radius: 25px;
  color: #fff;
  margin-top:50px;


    @media screen and  ( max-width:420px){
   margin-bottom: 2em;
  }


`;

export const HospitalLinkIcon = styled.i`
margin:1px;
 


`;

export const Spinnerdiv = styled.div`
justify-content:center;
align-items:center;
margin-top:150px;
margin-bottom:100px;

`;

export const SpinnerImg = styled.img`
margin:1px;


`;

