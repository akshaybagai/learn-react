import Expenses from "./components/Expenses";
import NewExpense from './components/NewExpense/NewExpense'

function App() {
    const expenses = [
        {id: 'e1', title: 'Title1', amount: '100', date: new Date(2021, 2, 1)},
        {id: 'e2', title: 'Title2', amount: '100', date: new Date(2021, 2, 1)},
        {id: 'e1', title: 'Title3', amount: '100', date: new Date(2021, 2, 1)},
    ];

    const addExpenseHandler = expense => {
        console.log("In app.js")
        console.log(expense)
    };

    return (
        <div>
            <NewExpense onAddExpense = {addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
