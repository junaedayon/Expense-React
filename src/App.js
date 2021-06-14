import { useState } from "react";
import "./App.css";
import Expense from "./Component/Expense/Expense";
import ExpensesM from "./Component/Expense/ExpensesM";
import NewExpense from "./Component/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2019, 5, 12),
  },
];


function App() {

const [expense , setExpenses] =  useState(DUMMY_EXPENSE);

  

 
const expenseHandler = (expense) => {
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses];
  });
};


  return (
    <div className="app">
      <NewExpense onAddExpense={expenseHandler}></NewExpense>
      <ExpensesM items={expense}></ExpensesM>

      
    </div>
  );
}

export default App;
