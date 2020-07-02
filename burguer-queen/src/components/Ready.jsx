import React from 'react'
import { editTime, edit, editTimeFinal } from '../controllers'

const Ready = (props) => {
    const [newDate, setNewDate] = React.useState("")
    const ordenReady = async (numbers) => {
        let dateOne = new Date();
        let dates = new Date();
        //dates += Date.now();
        //const date1 = dates.slice(0, 25);
        let cookingTime = numbers.timePrep - dates
        //cookingTime += Date.now()
        let timeC =
        console.log(cookingTime, " tiempo")
        console.log("otra hora ", dates)
        setNewDate(dates)
        try {
            const resul = await edit(numbers.id, "Orden Lista")
            const getTimeOut = await editTime(numbers.id, dates)
            const getFinalTime = await editTimeFinal(numbers.id, cookingTime)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <button className="btn-secondary"
                onClick={() => ordenReady(props.numbers)}>Lista</button>
        </div>
    )
}

export default Ready