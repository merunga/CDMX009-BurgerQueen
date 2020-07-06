import React from 'react'
import { editTime, edit, editTimeFinal } from '../controllers'
const moment = require('moment')

const Ready = (props) => {

    const ordenReady = async (numbers) => {
        let dateOne = new Date();
        let dates = moment(new Date())
        let dateFish= (dates.hour()*60) + dates.minute();
        let cookingTime =  (dateFish - numbers.timePrep)
        try {
            await edit(numbers.id, "Orden Lista")
            await editTime(numbers.id, dateOne)
            await editTimeFinal(numbers.id, cookingTime)
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
