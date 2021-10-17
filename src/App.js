import React, {useState} from "react";
import Expenses from "./components/Expenses";
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSE = [
    {id: 'e1', title: 'Title1', amount: '100', date: new Date(2021, 2, 1)},
    {id: 'e2', title: 'Title2', amount: '100', date: new Date(2020, 2, 1)},
    {id: 'e3', title: 'Title3', amount: '100', date: new Date(2019, 2, 1)},
    {id: 'e4', title: 'Title4', amount: '100', date: new Date(2019, 2, 1)},
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    const addExpenseHandler = expense => {
        setExpenses(prevState => {
            return [expense, ...prevState];
        })
    };

    return (
        <div>
            <NewExpense onAddExpense = {addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
