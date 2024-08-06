package com.bit.springboard.service;

import com.bit.springboard.dto.UserDto;


import java.util.List;
import java.util.Map;

public interface UserService {

    void join(UserDto userDto);

    Map<String, Object> emailCheck(String email);

    Map<String, Object> nameCheck(String name);

    UserDto login(UserDto userDto);

//  주성이형 part

    UserDto findById(UserDto userDto);

    void updateProfileImage(UserDto userDto);

    UserDto updateUserInformation(UserDto userDto);

    String updateStatusMessage(UserDto userDto);
}
