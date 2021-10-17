import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css'
import Card from "./Card";

function ExpensesList(props) {

    let expensesContent = <p>No expenses filtered</p>

    if(props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses found</h2>
    }

    return <ul className="expenses-list">
        {props.items
            .map((expense => <ExpenseItem key={expense.id}
                                          title={expense.title}
                                          amount={expense.amount}
                                          date={expense.date}/>))
        }
    </ul>
}

export default ExpensesList;