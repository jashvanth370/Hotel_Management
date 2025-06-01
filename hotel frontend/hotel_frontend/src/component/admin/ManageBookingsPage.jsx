import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';
import Pagination from '../common/Pagination';

const ManageBookingsPage = () => {
    const [bookings, setBookings] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [bookingsPerPage] = useState(6);
    const [showArchived, setShowArchived] = useState(false);
    const navigate = useNavigate();

    const fetchBookings = async () => {
            try {
                const response = await ApiService.getAllBookings();
                console.log("✅ Booking API Response:", response);
                setBookings(response.bookingList || []);
                console.log("message", response.message)
            } catch (error) {
                console.error('❌ Error fetching bookings:', error.message);
            }
        };

    useEffect(() => {
        fetchBookings();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const toggleArchived = () => {
        setShowArchived(prev => !prev);
        setCurrentPage(1);
    };

    const handleUnarchive = async (bookingId) => {
        if (!window.confirm('Are you sure you want to unachive this booking?')) return;
        try {
            await ApiService.unarchiveBooking(bookingId);
            await fetchBookings();
        } catch (error) {
            console.error("Failed to unarchive booking:", error.message)
        }
    }

    const filteredBookings = bookings.filter((booking) => {
        const matchesArchived = booking.archived === showArchived;
        const matchesSearch = booking.bookingConfirmationCode?.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesArchived && matchesSearch;
    });

    const indexOfLastBooking = currentPage * bookingsPerPage;
    const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
    const currentBookings = filteredBookings.slice(indexOfFirstBooking, indexOfLastBooking);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='bookings-container'>
            <h2>{showArchived ? 'Archived Bookings' : 'Active Bookings'}</h2>

            <div className='controls'>
                <div className='search-div'>
                    <label>Filter by Booking Number:</label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Enter booking number"
                    />
                </div>

                <button className='toggle-archive-button' onClick={toggleArchived}>
                    {showArchived ? 'Show Active Bookings' : 'Show Archived Bookings'}
                </button>
            </div>

            <div className="booking-results">
                {currentBookings.length > 0 ? (
                    currentBookings.map((booking) => (
                        <div key={booking.id} className="booking-result-item">
                            <p><strong>Booking Code:</strong> {booking.bookingConfirmationCode}</p>
                            <p><strong>Check In Date:</strong> {booking.checkInDate}</p>
                            <p><strong>Check Out Date:</strong> {booking.checkOutDate}</p>
                            <p><strong>Total Guests:</strong> {booking.totalNumOfGuest}</p>
                            {booking.archived ? (
                                <button
                                    className="edit-room-button"
                                    onClick={() => handleUnarchive(booking.id)}
                                >
                                    Unarchive Booking
                                </button>
                            ) : (
                                <button
                                    className='edit-room-button'
                                    onClick={() => navigate(`/admin/edit-booking/${booking.bookingConfirmationCode}`)}
                                >
                                    Manage Booking
                                </button>
                            )
                            }

                        </div>
                    ))
                ) : (
                    <p>No bookings found.</p>
                )}
            </div>

            <Pagination
                roomsPerPage={bookingsPerPage}
                totalRooms={filteredBookings.length}
                currentPage={currentPage}
                paginate={paginate}
            />
        </div>
    );
};

export default ManageBookingsPage;
