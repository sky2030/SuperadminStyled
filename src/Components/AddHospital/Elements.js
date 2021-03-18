import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const HospitalWrapper = styled.div`
  width: 50%;
  margin: 10px auto 60px auto;
  background: rgb(238, 238, 238);
  background: radial-gradient(
    circle,
    rgba(238, 238, 238, 1) 0%,
    rgba(215, 230, 246, 1) 100%
  );
  text-align: center;


  @media screen and  ( max-width:420px){
      width: 90%;
    
  }

`;

export const HospitalBackbtn = styled(LinkR)`
  width: auto;
  float: left;
  margin-top: 8px;
  padding-left: 20px;

`;



export const Hospitalheading = styled.h2`
  background-color: rgb(46 82 147);
  color: #fff;
  font-size: 20px;
  padding: 5px;
  text-align: center;

`;

export const HospitalForm = styled.form`
margin:0px;




`;


export const HospitalRow = styled.div`
margin-bottom: 0px;


`;

export const HospitalInput = styled.input`
  width: 70%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 5px;
  padding: 5px;

  @media screen and  ( max-width:420px){
     width: 90%;
    flex-direction: column;
  }


`;

export const PictureSelection = styled.input`
  width: 82.5%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color:white;
  padding: 5px;
  min-width: 14rem;
  margin:5px 0px;

  @media screen and  ( max-width:420px){
    width: 94.5%;
    flex-direction: column;
  }


`;

export const HospitalError = styled.div`
 font-size:12px;
 color:red;


`;

export const HospitalLabel = styled.label`
 width: 100%;
  float: left;
  text-align: left;
  padding-left: 15%;
  font-size: 14px;

    /* position: relative;
  display: inline-block;
  cursor: pointer;
  height: 2.5rem; */

  @media screen and  ( max-width:420px){
     padding-left: 5%;
  }


`;

export const HospitalBtnContainer = styled.div`
 padding: 15px 0px;

`;

export const Hospitalbutton = styled.button`
 background-color: rgb(22, 115, 190);
  width: 70%;
  font-size: 15px;
  border: 0px;
  height: 40px;
  margin-bottom: 10px;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;

`;

export const BackI = styled.i`
 /* background-color: rgb(22, 115, 190); */
  width: 70%;
  font-size: 15px;
  border: 0px;
  /* height: 40px; */
  margin-bottom: 10px;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;

`;



export const HospitalI = styled.i`
 font-size: 18px;
 padding-right: 10px;

`;

// export const HospitalFooter = styled.i`
//  margin:0px;

// `;


export const HospitalImg = styled.img`
   margin-top:1px;
  width:90%;


`;


