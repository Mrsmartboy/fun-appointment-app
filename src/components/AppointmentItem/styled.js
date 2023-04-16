
import styled from 'styled-components'

export const AppointmentItemContainer = styled.li`
   border: 2px solid #b5b7c4;
   border-radius:10px ;
   width: 200px;
   margin-right: 10px;
   margin-bottom: 10px;
   padding: 10px;
   @media screen and (max-width:576px){
      width: 100%;
   }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`
export const ItemHead = styled.h1`
 color: #171f46;
 font-size: 18px;
 font-weight: bold;
`

export const StarButton = styled.button`
    border: none;
    outline:none;
    background-color: transparent;
    cursor: pointer;
`

export const StarImg= styled.img`
  width: 32px;
  height: 32px;
`

export const Date = styled.p`
   color: #b5b7c4;
   font-size: 13px;
   font-weight: bold;
`