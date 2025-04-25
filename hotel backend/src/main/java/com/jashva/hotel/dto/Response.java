package com.jashva.hotel.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.Setter;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Response {
    private int statusCode;
    private String message;
    private String token;
    private String role;
    private String expirationTime;
    private String bookingConfirmationCode;
    private UserDTO userDTO;
    private RoomDTO roomDTO;
    private BookingDTO bookingDTO;
    private List<UserDTO> userDTOList;
    private List<RoomDTO> roomDTOList;
    private List<BookingDTO> bookingDTOList;
}
