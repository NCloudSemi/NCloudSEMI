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

    public int nameCheck(String nickname) {
        System.out.println("nameCheck 실행");
        return mybatis.selectOne("UserDao.nameCheck", nickname);
    }

    public void join(UserDto userDto) {
        System.out.println("UserDao의 join메소드 실행");
        mybatis.insert("UserDao.join", userDto);
    }

    public UserDto login(UserDto userDto) {
        System.out.println("UserDao의 login메소드 실행");
        return mybatis.selectOne("UserDao.login", userDto);
    }

//     주성이형 part
public UserDto findById(UserDto userDto) {
    try {

        return mybatis.selectOne("UserDao.findById", userDto);
    } catch (Exception e) {
        // 예외 메시지 출력
        System.err.println("Error fetching user by ID: " + e.getMessage());
    }
    return null;
}

    public void updateProfileImage(UserDto existingUser) {
        // SQL 또는 MyBatis, JPA를 사용하여 업데이트
        mybatis.selectOne("UserDao.updateProfileImage", existingUser);
    }

    public void updateUserInformation(UserDto existingUser) {
        mybatis.selectOne("UserDao.updateUserInformation", existingUser);
    }

    public void updateStatusMessage(UserDto existingUser) {
        mybatis.selectOne("UserDao.updateStatusMessage", existingUser);
    }
}
