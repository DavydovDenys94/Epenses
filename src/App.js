import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import "./App.css"
// import ExpensesFilter from './components/Expenses/ExpensesFilter';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 7, 14),
  },
  {
    id: 'e4',
    title: 'New Desk(Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  console.log("APP", expenses)
  const addExpenseHandler = expense =>{
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
    // console.log('In app.js');  
    // console.log(expense);
  }

  return (
    <div className="App">
      <h2 className="App-h2">Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} /> 
    </div>
  );
}

/*const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Test name="test" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactdfgdfg
        </a>
      </header>
    </div>
  );

  return(
    <div>
      <h2>Let's get started</h2>
      <Expenseitem 
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].data}
      />
      <Expenseitem
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].data}
      />
      <Expenseitem
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].data}
      />
      <Expenseitem
      title={expenses[3].title}
      amount={expenses[3].amount}
      date={expenses[3].data}
      />

    </div>
  )
}
*/
export default App;
