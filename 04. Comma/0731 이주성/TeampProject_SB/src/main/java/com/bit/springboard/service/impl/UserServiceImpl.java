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
    public Map<String, Object> emailCheck(String username) {

        System.out.println(username);

        int emailCheck = userDao.emailCheck(username);

        System.out.println(emailCheck);
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


    @Override
    public UserDto getUser() {
        return userDao.getUser();
    }

    @Override
    public void updateProfileImage(UserDto userDto) {
        // 기존 사용자 정보 조회
        UserDto existingUser = userDao.findById(userDto.getUser_id());
        if (existingUser == null) {
            throw new IllegalArgumentException("User not found");
        }

        // 업데이트할 사용자 정보 설정 (새로운 프로필 이미지 경로를 포함)
        existingUser.setProfile_img(userDto.getProfile_img());

        // 데이터베이스에 업데이트
        userDao.updateProfileImage(existingUser);
    }

    @Override
    public String updateUserInformation(UserDto userDto) {

        // 기존 사용자 정보 조회
        UserDto existingUser = userDao.findById(userDto.getUser_id() + 1);
        if (existingUser == null) {
            throw new IllegalArgumentException("User not found");
        }

        // 닉네임이 변경되었는지 확인
        if (userDto.getNickname() != null && !userDto.getNickname().equals(existingUser.getNickname())) {
            existingUser.setNickname(userDto.getNickname());
        }

        // 주소가 변경되었는지 확인
        if (userDto.getAddress() != null && !userDto.getAddress().equals(existingUser.getAddress())) {
            existingUser.setAddress(userDto.getAddress());
        }

        // 변경된 정보 업데이트
        userDao.updateUserInformation(existingUser);
        return "User information updated successfully";
    }

}

