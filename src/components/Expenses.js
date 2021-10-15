import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

import './Expenses.css'
import Card from "./Card";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const onFilterChangeEventHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    };

    return (
        <div>
            <ExpensesFilter onFilterChange={onFilterChangeEventHandler} selected={filteredYear}/>
            <Card className="expenses">
                <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
            </Card>
        </div>
    );
}

export default Expenses;