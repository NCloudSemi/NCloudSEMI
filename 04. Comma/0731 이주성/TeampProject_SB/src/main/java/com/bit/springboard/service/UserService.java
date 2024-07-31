package com.bit.springboard.service;

import com.bit.springboard.dto.UserDto;


import java.util.List;
import java.util.Map;

public interface UserService {

    void joinUser(UserDto userDto);

    List<UserDto> getMembers();

    UserDto getMemberByUsername(UserDto userDto);

    Map<String, Object> emailCheck(String email);

    Map<String, Object> nameCheck(String name);

    UserDto login(UserDto userDto);

//    String changeNickname(UserDto userDto);

    UserDto getUser();

    void updateProfileImage(UserDto userDto);

    String updateUserInformation(UserDto userDto);
}
