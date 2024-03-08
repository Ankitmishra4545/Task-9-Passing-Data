# Task-9-Passing-Data
React

You can dynamically render the ExpenseItems component based on an array of expenses. Assuming each expense object has a LocationOfExpenditure property, you can loop through the array and render the ExpenseItems component for each expense. Here's an example:

import React from 'react';
import ExpenseItems from './ExpenseItems';

const App = () => {
  // Assuming expenses is an array of objects with LocationOfExpenditure property
  const expenses = [
    { LocationOfExpenditure: 'Expense 1 Location' },
    { LocationOfExpenditure: 'Expense 2 Location' },
    // ... 98 more expenses
  ];

  return (
    <div>
      <h1>Expense List</h1>
      {expenses.map((expense, index) => (
        <ExpenseItems key={index} locationOfExpenditure={expense.LocationOfExpenditure} />
      ))}
    </div>
  );
};

export default App;


In this example, the map function is used to iterate over the expenses array, and for each expense, it renders an ExpenseItems component with the corresponding LocationOfExpenditure prop. This way, you don't have to manually write the component for each expense, making your code more scalable.
