package com.jashva.hotel.controller;

import com.jashva.hotel.dto.Response;
import com.jashva.hotel.entity.Booking;
import com.jashva.hotel.service.interface1.IBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bookings")

public class BookingController {

    @Autowired
    private IBookingService bookingService;

    @PostMapping("/book-room/{roomId}/{userId}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<Response> saveBookings(@PathVariable Long roomId,
                                                 @PathVariable Long userId,
                                                 @RequestBody Booking bookingRequest) {


        Response response = bookingService.saveBooking(roomId, userId, bookingRequest);
        return ResponseEntity.status(response.getStatusCode()).body(response);

    }

    @GetMapping("/all")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Response> getAllBookings() {
        Response response = bookingService.getAllBookings();
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @GetMapping("/get-by-confirmation-code/{confirmationCode}")
    public ResponseEntity<Response> getBookingByConfirmationCode(@PathVariable String confirmationCode) {
        Response response = bookingService.findBookingByConfirmationCode(confirmationCode);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @DeleteMapping("/cancel/{bookingId}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<Response> cancelBooking(@PathVariable Long bookingId) {
        Response response = bookingService.cancelBooking(bookingId);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @PutMapping("/archive/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Response> achieveBooking(@PathVariable Long id){
        Response response = bookingService.achieveBooking(id);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @PutMapping("/unArchive/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Response> unAchieveBooking(@PathVariable Long id){
        Response response = bookingService.unAchieveBooking(id);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @GetMapping("/active")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Response> getActiveBookings() {
        Response response = bookingService.getActiveBookings();
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @GetMapping("/archived")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Response> getArchivedBookings() {
        Response response = bookingService.getArchivedBookings();
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

}
