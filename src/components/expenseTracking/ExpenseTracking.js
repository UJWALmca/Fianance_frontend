import React, { useState } from 'react';

const ExpenseTracking = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    date: ''
  });

  const fetchExpenses = async () => {
    const response = await fetch('/api/expenses');
    const data = await response.json();
    setExpenses(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newExpense),
    });
    if (response.ok) {
      fetchExpenses(); // Refresh the expense list
    }
  };

  return (
    <div>
      <h2>Expense Tracking</h2>
      <form onSubmit={handleFormSubmit}>
        <input name="description" value={newExpense.description} onChange={handleInputChange} placeholder="Description" />
        <input name="amount" value={newExpense.amount} onChange={handleInputChange} placeholder="Amount" />
        <input name="date" type="date" value={newExpense.date} onChange={handleInputChange} placeholder="Date" />
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>{expense.description} - {expense.amount} on {expense.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracking;
