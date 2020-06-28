import React from 'react'
import {  editTime, edit } from '../controllers'


const Ready = (props) => {
    
const[isReady, setIsReady]= React.useState(false)
const[newDate, setNewDate]= React.useState("")

    const ordenReady=async (numbers)=>{
    let dates = new Date();
    dates += Date.now();
    const date1 = dates.slice(0, 25);
    setNewDate(date1)
    
        try {
            const resul = await edit(numbers.id, "Orden Lista")
    
               const getTimeOut = await editTime(numbers.id, date1)
    
               setIsReady(true)
    
          } catch (error) {
            console.log(error)
          }
    
    }
       



    return (
        <div>
            <button className="btn-secondary"
            onClick={()=>ordenReady(props.numbers)}>Lista</button>

        {
            isReady ? <button className="btn-danger">✔{newDate}</button>
            : console.log("imagen vieja ")
        }

        </div>

    )
}

export default Ready