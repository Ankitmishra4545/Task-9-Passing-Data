import React from 'react';

const ExpenseDetails = ({ title, amount }) => {
  return (
    <div>
      <p>Title: {title}</p>
      <p>Amount: {amount}</p>
    </div>
  );
};

export default ExpenseDetails;


import React from 'react';
import ExpenseDetails from './ExpenseDetails';

const App = () => {
  const expenses = [
    { id: 1, title: 'Food', amount: 10 },
    { id: 2, title: 'Petrol', amount: 100 },
    { id: 3, title: 'Movies', amount: 200 },
  ];

  return (
    <div className='expense-item'>

<ExpenseDate date ={props.date} />

<ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />

<div>
  );
};

export default App;

This structure allows you to use the ExpenseDetails component to display the title and amount for each expense in the App component.
