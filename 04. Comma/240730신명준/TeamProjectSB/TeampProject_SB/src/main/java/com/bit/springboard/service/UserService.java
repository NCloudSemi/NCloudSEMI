package com.bit.springboard.service;

import com.bit.springboard.dto.UserDto;

import java.util.List;
import java.util.Map;

public interface UserService {
    void join(UserDto userDto);

    List<UserDto> getMembers();

    UserDto getMemberByUsername(UserDto userDto);

    Map<String, Object> usernameCheck(String username);

    String nicknameCheck(String nickname);

    UserDto login(UserDto userDto);
}
