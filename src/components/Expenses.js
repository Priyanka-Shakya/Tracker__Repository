import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import Card from "./Card";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterchangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterchangeHandler} />
            {filteredExpenses.length===0?<p>No Expenses found</p> :
            props.item.map((expense) => 
            <ExpenseItem
            key={expense.id}
             title={expense.title}
             amount={expense.amount} 
             date={expense.date} />)
             }
        </Card>
    )
}

export default Expenses;