import styled from 'styled-components'


export const AppointmentMainContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   min-height: 100vh;
   background-image:linear-gradient(#9796f0,#fbc7d4);
`

export const AppointmentCardContainer = styled.div`
  background-color: #ffffff;
  border-radius:30px ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 80%;
  margin: 40px;
  
`

export const AppointmentHead = styled.h1`
color: #171f46;
font-size: 30px;
font-weight: bold;

`

export const AppointmentContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
 
`

export const AppointmentForm = styled.form`
   display: flex;
   flex-direction: column;
   margin-right: 10px;
   width: 100%;
   padding-right: 20px;
 
`

export const TitleLabel = styled.label`
  color: #b5b7c4;
  font-size: 10px;
  font-weight: bold;
  margin-bottom: 10px;

`
export const DateLabel = styled.label`
  color: #b5b7c4;
  font-size: 10px;
  font-weight: bold;
  margin-bottom: 10px;

`

export const DateInput = styled.input`
 width: 100%;
 padding: 10px;
 border-radius: 5px;
 margin-bottom: 15px;
 border: 2px solid #171f46;
 width: 100%;

 @media screen  and (min-width:576px){
    width: 200px;
 }

`

export const TitleInput=styled.input`
width: 100%;
 padding: 10px;
 border-radius: 5px;
 margin-bottom: 10px;
border: 2px solid #171f46;
width: 100%;
@media screen  and (min-width:576px){
    width: 200px;
 }
`



export const Button= styled.button`
   width: 100px;
   background-color:  #8b5cf6;
   font-size: 15px;
   font-weight: bold;
   border: none;
   outline: none;
   border-radius: 10px;
   color: #ffffff;
   padding: 10px;
   cursor: pointer;
  
`

export const Image = styled.img`
  width: 50%;
 @media screen and (max-width:576px) {
    display: none;
    width: 50%;
 }

`

export const AppointmentCon= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const AppointmentsHeading = styled.h1`
  color: #171f46;
  font-size: 20px;
  font-weight: bold;

`

export const HrLine = styled.hr`
  width: 100%;
  border: 2px solid #171f46;
`


export const StarredButton = styled.button`
   background-color: transparent;
   border: 2px solid #9897f0;
   outline: none;
   border-radius: 20px;
   cursor: pointer;
   background-color: ${props=>props.filter&&'#9897f0'};
   color: ${props=>props.filter&&'#ffffff'};
   font-weight: 500;
`

export const AppointmentList = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`


