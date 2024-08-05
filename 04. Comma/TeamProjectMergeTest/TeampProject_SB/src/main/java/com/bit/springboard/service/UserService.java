package com.bit.springboard.service;

import com.bit.springboard.dto.UserDto;


import java.util.List;
import java.util.Map;

public interface UserService {

    void join(UserDto userDto);

    Map<String, Object> emailCheck(String email);

    Map<String, Object> nameCheck(String name);

    UserDto login(UserDto userDto);



    // 주성이형 part
    UserDto getUser();

    void updateProfileImage(UserDto userDto);

    String updateUserInformation(UserDto userDto);

    String updateStatusMessage(UserDto userDto);
}
