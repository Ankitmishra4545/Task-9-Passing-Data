import React from 'react';
import ExpenseItems from './ExpenseItems';

const App = () => {
  const expenses = [
    { id: 1, title: 'Food', amount: 10 },
    { id: 2, title: 'Petrol', amount: 100 },
    { id: 3, title: 'Movies', amount: 200 },
  ];

  return (
    <div>
      <h1>Expense Items</h1>
      {expenses.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};

export default App;




And in the ExpenseItems component:


import React from 'react';

const ExpenseItems = ({ title, amount }) => {
  return (
    <div>
      <p>{title} Rs {amount}</p>
    </div>
  );
};

export default ExpenseItems;
