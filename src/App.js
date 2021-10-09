import Expenses from "./components/Expenses";

function App() {
    const expenses = [
        {id: 'e1', title: 'Title1', amount: '100', date: new Date(2021, 2, 1)},
        {id: 'e2', title: 'Title2', amount: '100', date: new Date(2021, 2, 1)},
        {id: 'e1', title: 'Title3', amount: '100', date: new Date(2021, 2, 1)},
    ];
    return (
        <Expenses items={expenses}/>
    );
}

export default App;
