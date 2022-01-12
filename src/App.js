import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expense/ExpenseItem';

function App() {
    const expense=[
      {
        id:'e1',
        title:"school fee",
        price:250,
        date:new Date(2022,5,12)
      }
    ]

  return (
    <>
         <ExpenseItem date={expense[0].date} title={expense[0].title} price={expense[0].price}></ExpenseItem>
    </>
  );
}

export default App;
