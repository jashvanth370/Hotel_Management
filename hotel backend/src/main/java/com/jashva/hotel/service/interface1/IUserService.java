package com.jashva.hotel.service.interface1;


import com.jashva.hotel.dto.LoginRequest;
import com.jashva.hotel.dto.Response;
import com.jashva.hotel.entity.User;

public interface IUserService {
    Response register(User user);

    Response login(LoginRequest loginRequest);

    Response getAllUsers();

    Response getUserBookingHistory(String userId);

    Response deleteUser(String userId);

    Response getUserById(String userId);

    Response getMyInfo(String email);

    Response createUser(User user);

}
