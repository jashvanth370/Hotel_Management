package com.jashva.hotel.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.jashva.hotel.entity.Booking;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class RoomDTO {
    private Long id;
    private String roomType;
    private BigDecimal roomPrice;
    private String roomPhotoURL;
    private String roomDescription;

    private List<BookingDTO> bookingDTOS;
}
