package com.bit.springboard.service.impl;

import com.bit.springboard.dao.UserDao;
import com.bit.springboard.dto.UserDto;
import com.bit.springboard.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {

    private UserDao userDao;

    @Autowired
    public UserServiceImpl(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public void join(UserDto userDto) {

    }

    @Override
    public List<UserDto> getMembers() {
        return List.of();
    }

    @Override
    public UserDto getMemberByUsername(UserDto userDto) {
        return null;
    }

    @Override
    public Map<String, Object> usernameCheck(String username) {

        int usernameCheck = userDao.usernameCheck(username);

        Map<String, Object> chkResult = new HashMap<>();

        if (usernameCheck == 0) {
            chkResult.put("usernameCheckMsg", "usernameOK");
        } else {
            chkResult.put("usernameCheckMsg", "usernameFail");
        }

        return chkResult;
    }

    @Override
    public String nicknameCheck(String nickname) {
        return "";
    }

    @Override
    public UserDto login(UserDto userDto) {
        return null;
    }

    @Override
    public String changeNickname(UserDto userDto) {

        UserDto existingUser = userDao.findById(userDto.getId());
        if (existingUser == null) {
            throw new IllegalArgumentException("User not found");
        }

        System.out.println(existingUser);
        System.out.println(userDto);

        if (userDto.getNickname().equals(existingUser.getNickname())) {
            throw new IllegalArgumentException("New nickname is the same as the old one");
        }

        existingUser.setNickname(userDto.getNickname());
        userDao.changeNickname(existingUser);
        return "Nickname updated successfully";

    }

    @Override
    public UserDto getUser() {
        return userDao.getUser();
    }

}


