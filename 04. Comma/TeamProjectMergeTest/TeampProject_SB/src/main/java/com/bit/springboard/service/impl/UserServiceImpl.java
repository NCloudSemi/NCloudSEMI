package com.bit.springboard.service.impl;

import com.bit.springboard.dao.UserDao;
import com.bit.springboard.dto.UserDto;

import com.bit.springboard.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
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
        System.out.println("UserserviceImpl의 join메소드 실행");
        userDao.join(userDto);
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

        System.out.println(chkResult.get("emailCheckMsg"));

        return chkResult;
    }

    @Override
    public Map<String, Object> nameCheck(String nickname) {

        System.out.println(nickname);

        int nameCheck = userDao.nameCheck(nickname);

        Map<String, Object> chkResult = new HashMap<>();

        if(nameCheck == 0){
            chkResult.put("nameCheckMsg", "nameOK");
        } else {
            chkResult.put("nameCheckMsg", "nameFail");
        }

        System.out.println(chkResult.get("nameCheckMsg"));

        return chkResult;
    }

    @Override
    public UserDto login(UserDto userDto) {

        System.out.println("UserServiceImpl.login메소드 실행");
        System.out.println(userDto.getEmail());
        System.out.println(userDto.getPw());

        int emailCheck = userDao.emailCheck(userDto.getEmail());

        if(emailCheck == 0)
            throw new RuntimeException("emailNotExist");

        UserDto loginUser = userDao.login(userDto);

        if(loginUser == null)
            throw new RuntimeException("wrongPassword");

        return loginUser;
    }

    @Override
    public UserDto findById(int user_id) {

        System.out.println("UserServiceImpl.findById 메소드 실행");
        System.out.println(userDao.findById(user_id));

        UserDto existingUser = userDao.findById(user_id);
        System.out.println(existingUser);
        if (existingUser == null) {
            throw new IllegalArgumentException("User not found");
        }
        System.out.println(existingUser);
        return existingUser;
    }

//// 주성이형 part
//    @Override
//    public UserDto getUser() {
//        return userDao.getUser();
//    }

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
        UserDto existingUser = userDao.findById(userDto.getUser_id());
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

    @Override
    public String updateStatusMessage(UserDto userDto) {

        // 기존 사용자 정보 조회
        UserDto existingUser = userDao.findById(userDto.getUser_id());
        if (existingUser == null) {
            throw new IllegalArgumentException("User not found");
        }

        // 메세지가 변경되었는지 확인
        if (userDto.getMessage() != null && !userDto.getMessage().equals(existingUser.getMessage())) {
            existingUser.setMessage(userDto.getMessage());
        }

        // 변경된 정보 업데이트
        userDao.updateStatusMessage(existingUser);
        return "User status message updated successfully";
    }

}

