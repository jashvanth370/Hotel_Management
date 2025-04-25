package com.jashva.hotel.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Data
@Setter
@Getter
@Table(name = "rooms")
@Entity
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String bookingConfirmationCode;
    private String roomType;
    private BigDecimal roomPrice;
    private String roomPhotoURL;
    private String roomDescription;
    @OneToMany(mappedBy = "room",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private List<Booking> bookings = new ArrayList<>();

    @Override
    public String toString() {
        return "Room{" +
                "id=" + id +
                ", bookingConfirmationCode='" + bookingConfirmationCode + '\'' +
                ", roomType='" + roomType + '\'' +
                ", roomPrice=" + roomPrice +
                ", roomPhotoURL='" + roomPhotoURL + '\'' +
                ", roomDescription='" + roomDescription + '\'' +
                ", bookings=" + bookings +
                '}';
    }
}
