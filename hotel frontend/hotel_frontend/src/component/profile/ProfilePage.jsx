import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchUserProfile = async () => {
        try {
            const response = await ApiService.getUserProfile();
            // Fetch user bookings using the fetched user ID
            const userPlusBookings = await ApiService.getUserBookings(response.user.id);
            setUser(userPlusBookings.user)

        } catch (error) {
            setError(error.response?.data?.message || error.message);
        }
    };


    useEffect(() => {
        fetchUserProfile();
    }, []);

    const handleLogout = () => {
        if (!window.confirm('Are you sure you want to logout ?')) return;
        ApiService.logout();
        navigate('/home');
    };

    const handleEditProfile = () => {
        navigate('/edit-profile');
    };

    const handleCancelBooking = async (bookingId) => {
        if (!window.confirm('Are you sure you want to cancel your booking?')) return;
        try {
            await ApiService.cancelBooking(bookingId);
            alert("Cancel Booking")
            await fetchUserProfile();

        } catch (error) {
            console.error("Error to cancel order", error)
        }
    };

    const handlePaymentBooking = async (booking) => {
        // Calculate total number of days
        const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
        const startDate = new Date(booking.checkInDate);
        const endDate = new Date(booking.checkOutDate);
        const totalDays = Math.round(Math.abs((endDate - startDate) / oneDay)) + 1;

        // Calculate total price
        const roomPricePerNight = booking.room.roomPrice;
        const calculatedTotalPrice = roomPricePerNight * totalDays;

        try {
            const totalAmount = roomPricePerNight * calculatedTotalPrice;
            const res = await ApiService.createCheckoutSession(totalAmount,booking.id);
            window.location.href = res.checkoutUrl;
        } catch (error) {
            alert("Payment failed to initiate.");
            console.error(error);
        }
    }

    return (
        <div className="profile-page">
            {user && <h2>Welcome, {user.name}</h2>}
            <div className="profile-actions">
                <button className="edit-profile-button" onClick={handleEditProfile}>Edit Profile</button>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
            {error && <p className="error-message">{error}</p>}
            {user && (
                <div className="profile-details">
                    <h3>My Profile Details</h3>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                </div>
            )}
            <div className="bookings-section">
                <h3>My Booking History</h3>
                <div className="booking-list">
                    {user && user.bookings.length > 0 ? (
                        user.bookings.map((booking) => (
                            <div key={booking.id} className="booking-item">
                                <p><strong>Booking Code:</strong> {booking.bookingConfirmationCode}</p>
                                <p><strong>Check-in Date:</strong> {booking.checkInDate}</p>
                                <p><strong>Check-out Date:</strong> {booking.checkOutDate}</p>
                                <p><strong>Total Guests:</strong> {booking.totalNumOfGuest}</p>
                                <p><strong>Room Type:</strong> {booking.room.roomType}</p>
                                <img src={booking.room.roomPhotoUrl} alt="Room" className="room-photo" />
                                <div>
                                    <button onClick={() => handleCancelBooking(booking.id)} > Cancel Booking</button><br></br>
                                    <button onClick={() => handlePaymentBooking(booking)}>Payment </button>

                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No bookings found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;