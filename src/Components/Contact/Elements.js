import styled from 'styled-components';

export const ContactImg = styled.img`
  width: 50%;
  box-shadow: 7px 1px 5px #999;
 /* border-bottom-left-radius:10px; */


  @media screen and  ( max-width:420px){
   box-shadow: 2px 4px 3px #999;
   
  }

    @media screen and  ( max-width:768px){
     width: 100%;
  }
`;

export const ContactBanner = styled.div`
   margin-top: 2em;
  display: flex;
  background: rgb(238, 238, 238);
  background: radial-gradient(
    circle,
    rgba(238, 238, 238, 1) 0%,
    rgba(215, 230, 246, 1) 100%
  );  
  box-shadow: 1px 0px 4px #999;
  border: 1px solid #999;
/* border-radius:10px; */

    @media screen and  ( max-width:420px){
    margin: 1em 0px;
    width: 90vw;
    display:flex;
    flex-direction:column;
  }
`;

export const ContactWrapper = styled.div`
  width: 80vw;
  margin: 15px auto;
  justify-content: center;
  align-items: center;
  display: flex;
/* border-radius:10px; */

    @media screen and  ( max-width:768px){
    width: 80vw;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
  }


  @media screen and  ( max-width:420px){
  width: 80vw;
    display: flex;
    flex-direction: column;
  }
`;

export const ContactHeader = styled.h3`
 
margin-bottom: 10px;
font-size: 17px;


`;

export const ContactTitle = styled.p`
line-height: 25px;
  font-size: 15px;
`;

export const ContactI = styled.i`
color: rgba(22, 115, 190);
  padding-right: 8px;
`;

export const ContactItem = styled.div` 
 margin: 15px;
  padding: 15px;
  text-align: left;

  @media screen and  ( max-width:420px){
    width: 80vw;
  }
`;
