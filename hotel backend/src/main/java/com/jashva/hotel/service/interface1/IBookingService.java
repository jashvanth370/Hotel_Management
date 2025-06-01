package com.jashva.hotel.service.interface1;

import com.jashva.hotel.dto.Response;
import com.jashva.hotel.entity.Booking;

public interface IBookingService {

    Response saveBooking(Long roomId, Long userId, Booking bookingRequest);

    Response findBookingByConfirmationCode(String confirmationCode);

    Response getAllBookings();

    Response cancelBooking(Long bookingId);

    Response achieveBooking(Long id);

    Response unAchieveBooking(Long id);

    Response getActiveBookings();
    Response getArchivedBookings();

}