import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserManagement from './components/usermanagment/UserManagement';
import ExpenseTracking from './components/expenseTracking/ExpenseTracking';
import Analysis from './components/Analysis/Analysis';
import Dashboard from './components/Dashboard/Dashboard';
import Notifications from './components/Notifications/Notifications';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/user-management">User Management</Link>
            </li>
            <li>
              <Link to="/expense-tracking">Expense Tracking</Link>
            </li>
            <li>
              <Link to="/analysis">Analysis</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/notifications">Notifications</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/expense-tracking" element={<ExpenseTracking />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/" element={<h2>Welcome to the Finance Management System</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;