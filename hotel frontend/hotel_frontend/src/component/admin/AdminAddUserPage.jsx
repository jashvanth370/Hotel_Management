import React, { useState } from 'react';
import ApiService from '../../service/ApiService';
import { useNavigate } from 'react-router-dom';

const AdminAddUserPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    role: 'USER', // or 'ADMIN'
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ApiService.addUser(userData);
      alert('User created successfully!');
      navigate('/admin/manage-users');
    } catch (error) {
      console.error('Error adding user:', error.message);
    }
  };

  return (
    <div className='add-user-form'>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
        <select name="role" onChange={handleChange}>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AdminAddUserPage;
