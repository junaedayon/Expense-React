import React, { useState } from "react";
import "./ExpensesM.css";

import Expense from "./Expense";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpenseList from "./ExpenseList";

function ExpensesM(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expens) => {
    return expens.date.getFullYear().toString() === filterYear;
  });

  // let expensesContent = <p>No Items Found Boss. Move Another Year</p>;

  // if(filteredExpenses.length > 0 ) {
  //   expensesContent =  filteredExpenses.map((expens) => (
  //     <Expense
  //       key={expens.id}
  //       title={expens.title}
  //       amount={expens.amount}
  //       date={expens.date}
  //     />
  //   ));
  // }


  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>

      <ExpensesChart expenses= {filteredExpenses}></ExpensesChart>


  <ExpenseList items={filteredExpenses}></ExpenseList>

    </Card>
  );
}

export default ExpensesM;
