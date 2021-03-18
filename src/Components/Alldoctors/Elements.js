import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const DoctorCard = styled.div`
    margin: 10px;
    box-shadow: 4px 2px 3px #999;
    /* width:20vw; */

      @media screen and  ( max-width:420px){
    
  }
`;

export const DoctorHeading = styled.h4`
  background-color: rgb(6, 105, 185);
  padding: 5px 10px;
  margin-bottom: 10px;
  text-align: center;
  color:white;



`;

export const DoctorCardItems = styled.div`
    flex-direction: row;
  display: flex;




`;

export const DoctorPic = styled.div`
      margin:0px 1em 15px 1em;
`;

export const DoctorImg = styled.img`
  width: 7vw;
  height: 15vh;
  float: left;
  box-shadow: 2px -2px 3px #999;

  
  @media screen and  ( max-width:420px){
    width: 30vw;
    float: left;
    box-shadow: 2px -2px 3px #999;
  }
`;




export const DoctorDetails = styled.div`
  float: left;
  padding: 0px 5px;

`;

export const DoctorSpinner = styled.div`
justify-content:center;
align-items:center;
margin-top:150px;
margin-bottom:100px;

`;

export const SpinnerImg = styled.img`
  float: left;
  padding: 0px 5px;

`;




export const DoctorDetailsItem = styled.p`
  width: 190px;
  word-break: break-word;
  line-height: 20px;
  padding-bottom: 3px;
  font-size:14px;
  text-align:left;


`;

export const DoctorI = styled.i`
 font-size: 10px;
`;

export const ApprovalDiv = styled.div`
 color:red;
 font-size:12px;
  display: flex;

  /* width: 250px;
  word-break: break-word;
  line-height: 20px;
  padding-bottom: 3px;
  font-size:14px;
  text-align:left; */

    @media screen and  ( max-width:420px){
    width: 30vw;
    float: left;
    /* box-shadow: 2px -2px 3px #999; */
  }
`;


export const Approvalb = styled.b`
 font-weight:bold;
 word-break:break-word;
`;





export const DoctorWrapper = styled.div`
  width: 95vw;
  display: flex;
  margin: 5px auto;

  @media screen and  ( max-width:420px){
  width: 90vw;
  flex-direction: column;
  }
`;

export const LeftPanel = styled.div`
position:relative;
height:20vh;


  @media screen and  ( max-width:768px){
  height:18vh;
  }

  @media screen and  ( max-width:420px){
  height:12vh;
  }

`;



export const DoctorSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgb(233, 220, 220);
  font-weight: bold;
  width: 100%;


`;



export const DoctorIcon = styled.i`
   position: absolute;
  background-color: rgba(40, 110, 167, 0);
  height: 40px;
  z-index: 1;
  padding: 10px 10px;
  color: #837c7c;
 margin-top: 5px;


`;



export const DoctorSearchdiv = styled.div`
 margin:1px;


`;



export const DoctorSearchInput = styled.input`
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

export const DoctorSelect = styled.select`
margin:1px;


`;




export const DoctorFLexcontainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
margin-bottom:60px;

  @media screen and  ( max-width:420px){
    margin-top: 10px;
  }


`;



export const HeightAdjust = styled.div`
  margin-bottom:100px;


`;






