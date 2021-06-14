import React from "react";
import Expense from "./Expense";
import "./ExpenseList.css";


function ExpenseList(props) {
  if(props.items.length === 0 ) {
      return <h2 className="expenses-list__fallback">No Items Found Boss</h2>
  }

  return <div>
      <ul className="expenses-list">
{props.items.map((expens) => (
      <Expense
        key={expens.id}
        title={expens.title}
        amount={expens.amount}
        date={expens.date}
      />
    ))
    
}

      </ul>
      
  </div>;
}

export default ExpenseList;
