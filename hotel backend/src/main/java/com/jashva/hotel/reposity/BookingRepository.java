package com.jashva.hotel.reposity;

import com.jashva.hotel.entity.Booking;
import com.jashva.hotel.exception.OurException;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking,Long> {
    List<Booking> findByUserId(Long userId);
    List<Booking> findByRoomId(Long roomId);
    Optional<Booking> findByBookingConfirmationCode(String confirmationCode);


    List<Booking> findByArchivedTrue();

    List<Booking> findByArchivedFalse();


}
