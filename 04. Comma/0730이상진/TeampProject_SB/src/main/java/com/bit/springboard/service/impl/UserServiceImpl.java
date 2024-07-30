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
    public void joinUser(UserDto userDto) {
        System.out.println("UserServiceImpl의 join메소드 실행");
        userDao.insertUser(userDto);
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
    public Map<String, Object> emailCheck(String email) {

        System.out.println(email);

        int emailCheck = userDao.emailCheck(email);

        Map<String, Object> chkResult = new HashMap<>();

        if (emailCheck == 0) {
            chkResult.put("emailCheckMsg", "emailOK");
        } else {
            chkResult.put("emailCheckMsg", "emailFail");
        }

        return chkResult;
    }

    @Override
    public Map<String, Object> nameCheck(String name) {

        int nameCheck = userDao.nameCheck(name);

        Map<String, Object> chkResult = new HashMap<>();

        if(nameCheck == 0){
            chkResult.put("nameCheckMsg", "nameOK");
        } else {
            chkResult.put("nameCheckMsg", "nameFail");
        }

        return chkResult;
    }

    @Override
    public UserDto login(UserDto userDto) {

        System.out.println("UserServiceImpl.login메소드 실행");
        System.out.println(userDto.getEmail());

        int emailCheck = userDao.emailCheck(userDto.getEmail());

        if(emailCheck == 0)
            throw new RuntimeException("emailNotExist");

        UserDto loginUser = userDao.login(userDto);

        if(loginUser == null)
            throw new RuntimeException("wrongPassword");

        return loginUser;
    }
}
