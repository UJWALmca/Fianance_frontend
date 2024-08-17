import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    role: '',
    password: ''
  });

  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });
    if (response.ok) {
      fetchUsers(); // Refresh the user list
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <form onSubmit={handleFormSubmit}>
        <input name="username" value={newUser.username} onChange={handleInputChange} placeholder="Username" />
        <input name="email" value={newUser.email} onChange={handleInputChange} placeholder="Email" />
        <input name="role" value={newUser.role} onChange={handleInputChange} placeholder="Role" />
        <input name="password" type="password" value={newUser.password} onChange={handleInputChange} placeholder="Password" />
        <button type="submit">Add User</button>
      </form>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
