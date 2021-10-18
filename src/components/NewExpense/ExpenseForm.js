import React, {useState} from 'react';

import './ExpenseForm.css'

function ExpenseForm(props) {

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    //you can also keep one state per element
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        //one state per field
        // setEnteredTitle(event.target.value);

        // with one state it's on user to preserve the state.
        // this syntax copies the attributes of user input and
        // overrides just the entered title
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });

        //this helps ensure that your state is never lost
        //as react schedules updates
        setUserInput((prevState => {
            return {
              ...prevState,
              enteredTitle: event.target.value
            };
        }));
    };

    const amountChangeHandler = (event) => {
        setUserInput((prevState => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            };
        }));
    };

    const dateChangeHandler = (event) => {
        setUserInput((prevState => {
            return {
                ...prevState,
                enteredDate: event.target.value
            };
        }));
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={userInput.enteredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} value={userInput.enteredAmount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={userInput.enteredDate}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expenses</button>
            </div>
        </form>
    );
}

export default ExpenseForm;