import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'


import {AppointmentMainContainer,AppointmentCardContainer,
    AppointmentContainer,AppointmentHead,AppointmentForm,
    TitleInput,DateInput,TitleLabel,Image,HrLine,AppointmentCon,DateLabel,
    AppointmentsHeading,Button,StarredButton,AppointmentList} from './styled'


const Appointments =()=>{

    const [title,setTitle]= useState('')
    const [dateInput,setDate] = useState('')
    const [filter,setFilter]= useState(false)
    const [appointmentList,setAppointmentList] =useState([])

    const onChangeTitle=(event)=>{
         setTitle(event.target.value)
    }

   const  onChangeDate = (event)=>{
        setDate(event.target.value)
    }
   
    const onSubmitForm=(event)=>{
         event.preventDefault()

         if (title.length!==0 && dateInput.length!==0){
            const newAppointment = {
                id:uuidv4(),
                title,
                dateInput:new Date(dateInput),
                isStar:false,
            }
            setAppointmentList(prevState=>([...prevState,newAppointment]))
            setTitle("")
            setDate("")
         }else{
            alert("please enter the valid details")
         }
    }

    const onStar=(id)=>{
           setAppointmentList(prevState=>(prevState.map(each=>{
            if (each.id===id){
                return {...each,isStar:!each.isStar}
            }
            return each
           })))
    }

    const onFilterStar =()=>{
        setFilter(prevState=>!prevState)
    }

   const getFilteredResults=()=>{
        if (filter){
            return (appointmentList.filter(each=>each.isStar))
        }
        return appointmentList
        

    }

    const filteredResults = getFilteredResults()
    

    return(
        <AppointmentMainContainer>
            <AppointmentCardContainer>
            <AppointmentHead>Add Appointment</AppointmentHead>

                <AppointmentContainer>
                <AppointmentForm onSubmit={onSubmitForm}>
                    <TitleLabel htmlFor='title'>Title</TitleLabel>
                    <TitleInput type="text" placeholder="Title" id="title" onChange={onChangeTitle} value={title}/>
                    <DateLabel htmlFor='date'>Date</DateLabel>
                    <DateInput type="date" placeholder="dd/mm/yyyy" id="date" onChange={onChangeDate} value={dateInput}/>
                    <Button type="submit">Add</Button>
                </AppointmentForm>
                <Image src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png" alt="appointments"/>
                </AppointmentContainer>
                <HrLine />
                <AppointmentCon>
                    <AppointmentsHeading>Appointments</AppointmentsHeading>
                    <StarredButton onClick={onFilterStar} filter={filter}>Starred</StarredButton>
                </AppointmentCon>     
                <AppointmentList>
                    {filteredResults.map(each=>(
                        <AppointmentItem each={each} key={each.id} onStar={onStar}/>
                    ))}
                    </AppointmentList>      
            </AppointmentCardContainer>
        </AppointmentMainContainer>

    )

}

export default Appointments