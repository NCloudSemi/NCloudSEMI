package com.bit.springboard.dao;

import com.bit.springboard.dto.UserDto;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {

    // mybatis와의 통합을 간편하게해주는 클래스
    // 트랜잭션 관리, 스레드 안전성 보장
    private SqlSessionTemplate mybatis;

    @Autowired
    public UserDao(SqlSessionTemplate sqlSessionTemplate) {
        this.mybatis = sqlSessionTemplate;
    }

    public int emailCheck(String email) {
        System.out.println("emailCheck 실행");
        return mybatis.selectOne("UserDao.emailCheck", email);
    }

    public int nameCheck(String name) {
        return mybatis.selectOne("UserDao.nameCheck", name);
    }

    public void insertUser(UserDto userDto) {
        System.out.println("UserDao의 insertUser메소드 실행");

        mybatis.insert("UserDao.insertUser", userDto);

        System.out.println("UserDao의 insertUser메소드 종료");
    }

    public UserDto login(UserDto userDto) {

        return mybatis.selectOne("UserDao.login", userDto);
    }

    public UserDto update(UserDto existingUser) {
        return mybatis.selectOne("UserDao.changeNickname");
    }

    public UserDto findById(int user_id) {
        try {
            return mybatis.selectOne("UserDao.findById", user_id);
        }catch (Exception e){
            e.getMessage();
        }
        return null;

    }

    public UserDto getUser() {
        return mybatis.selectOne("UserDao.getUser");
    }

    public void updateProfileImage(UserDto existingUser) {
        // SQL 또는 MyBatis, JPA를 사용하여 업데이트
        mybatis.selectOne("UserDao.updateProfileImage", existingUser);
    }

    public void updateUserInformation(UserDto existingUser) {
        mybatis.selectOne("UserDao.updateUserInformation", existingUser);
    }
}
