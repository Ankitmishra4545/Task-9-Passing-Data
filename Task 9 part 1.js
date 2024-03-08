 If you want to pass LocationOfExpenditure as a prop and show it on the screen, 
   you can modify the ExpenseItems component like this:

import React from 'react';

const ExpenseItems = ({ locationOfExpenditure }) => {
  return (
    <div>
      <p>Location: {locationOfExpenditure}</p>
      {/* Add other details as needed */}
    </div>
  );
};

export default ExpenseItems;
