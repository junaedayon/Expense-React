import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'

import './Expense.css'
import Card from '../UI/Card'



function Expense(props) {
 
    // const  [title , setTitle] = useState(props.title)

    // const handleChange = () => {

    //     setTitle ( "Updated!!!" )

    // }

    return (
        <li>


        <Card className="expense-item">
        
            <ExpenseDate date={props.date}/>
           
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price ">$ {props.amount}</div>
            </div>

            {/* <button onClick={handleChange}>Click Here</button> */}
            
        </Card>
        </li>

    )
}

export default Expense
