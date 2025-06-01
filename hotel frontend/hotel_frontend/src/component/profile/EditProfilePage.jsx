import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';

const EditProfilePage = () => {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await ApiService.getUserProfile();
                setUser(response.user);
                setFormData({
                    name: response.user.name || '',
                    email: response.user.email || '',
                    phoneNumber: response.user.phoneNumber || '',
                });
            } catch (error) {
                setError('Failed to load profile');
            }
        };

        fetchUserProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEditProfile = async () => {
        try {
            await ApiService.userUpdate(user.id, formData);
            setSuccess('Profile updated successfully');
            setError(null);
        } catch (error) {
            setError('Failed to update profile');
            setSuccess(null);
            console.log(error)
        }
    };

    const handleDeleteProfile = async () => {
        if (!window.confirm('Are you sure you want to delete your account?')) return;
        try {
            await ApiService.deleteUser(user.id);
            navigate('/signup');
        } catch (error) {
            setError('Failed to delete account');
        }
    };

    return (
        <div className="edit-profile-page">
            <h2>Edit Profile</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            {user && (
                <div className="profile-form">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Phone Number:
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </label>
                    <div className='buttons'>
                        <button onClick={handleEditProfile} >Update Profile</button>
                        <button onClick={handleDeleteProfile} className="delete-profile-button">
                            Delete Profile
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
};

export default EditProfilePage;
