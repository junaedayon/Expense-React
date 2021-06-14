import React from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';


function NewExpense(props) {


    const saveExpenseDataHandler = (enteredExpenseData) => {
                 const expenseData = {
                     ...enteredExpenseData,
                     id: Math.random().toString()
                 }
                 props.onAddExpense(expenseData)
    }



    return (
        <div className="new-expense">
            <NewExpenseForm onSaveExpenseData ={saveExpenseDataHandler}></NewExpenseForm>
        </div>
    )
}

export default NewExpense
