import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/user-management">User Management</Link></li>
        <li><Link to="/expense-tracking">Expense Tracking</Link></li>
        <li><Link to="/analysis">Expense Analysis</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
