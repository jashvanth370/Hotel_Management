import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';
import Pagination from '../common/Pagination';

const ManageUserPage = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedRole, setSelectedRole] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await ApiService.getAllUsers();
                const userList = response?.data ?? []; // <- Properly extract user list
                setUsers(userList);
                setFilteredUsers(userList);
                console.log('Fetched users:', userList);
            } catch (error) {
                console.error('Error fetching users:', error.message);
            }
        };

        fetchUsers();
    }, []);



    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value);
        filterUsers(e.target.value);
    };

    const filterUsers = (role) => {
        if (role === '') {
            setFilteredUsers(users);
        } else {
            const filtered = users.filter((user) => user.role === role);
            setFilteredUsers(filtered);
        }
        setCurrentPage(1);
    };

    // Pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = Array.isArray(filteredUsers)
        ? filteredUsers.slice(indexOfFirstUser, indexOfLastUser)
        : [];

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='all-users'>
            <h2>All Users</h2>
            <div className='all-user-filter-div' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className='filter-select-div'>
                    <label>Filter by Role:</label>
                    <select value={selectedRole} onChange={handleRoleChange}>
                        <option value="">All</option>
                        <option value="ADMIN">ADMIN</option>
                        <option value="USER">USER</option>
                    </select>
                </div>
            </div>

            <table className='user-table'>
                <thead>
                    <tr>
                        <th>Name :</th>
                        <th>Email :</th>
                        <th>Phone :</th>
                        <th>Role :</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers && currentUsers.length > 0 ? (
                        currentUsers.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.role}</td>
                            </tr>
                        ))
                    ) : (
                        <tr><td colSpan="4">No users found.</td></tr>
                    )}

                </tbody>
            </table>

            <Pagination
                roomsPerPage={usersPerPage}
                totalRooms={filteredUsers.length}
                currentPage={currentPage}
                paginate={paginate}
            />
        </div>
    );
};

export default ManageUserPage;
