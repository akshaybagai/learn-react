import React, {useState} from 'react';

import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css'
import Card from "./Card";

function ExpenseItem(props) {
    //use state always returns two values first the current value, second to update the value
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        console.log("Clicked");
        setTitle('Updated');
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;