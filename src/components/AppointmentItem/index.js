import {AppointmentItemContainer,ItemContainer,ItemHead,StarButton,StarImg,Date} from './styled'

 import {format} from 'date-fns'


const AppointmentItem=(props)=>{
       const {each,onStar}=props 
       const {id,title,dateInput,isStar}=each

       const onClickStar=()=>{
        onStar(id)
       }
        
       const dateFormat=format(dateInput, 'dd MMMM yyyy, EEEE') 
       const imgUrl= isStar?'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png':'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    return(
       <AppointmentItemContainer>
              <ItemContainer>
                <ItemHead>{title}</ItemHead>
                <StarButton type="button" onClick={onClickStar}>
                <StarImg src={imgUrl} alt="star"/>
                </StarButton>
              </ItemContainer>
              <Date>Date:{dateFormat}</Date>
       </AppointmentItemContainer>
    )

}

export default AppointmentItem