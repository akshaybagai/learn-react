import React, {useState} from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

import './Expenses.css'
import Card from "./Card";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const onFilterChangeEventHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    };
    
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onFilterChange={onFilterChangeEventHandler} selected={filteredYear}/>
                <ExpensesList items = {filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;