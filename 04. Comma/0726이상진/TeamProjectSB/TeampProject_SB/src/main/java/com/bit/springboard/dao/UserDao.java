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

    public int usernameCheck(String username) {
        return mybatis.selectOne("UserDao.usernameCheck", username);

    }

    public UserDto update(UserDto existingUser) {
        return mybatis.selectOne("UserDao.changeNickname");
    }

    public UserDto findById(int id) {
        try {
            return mybatis.selectOne("UserDao.findById", id);
        }catch (Exception e){
            e.getMessage();
        }
        return null;

    }

    public UserDto getUser() {
        return mybatis.selectOne("UserDao.getUser");
    }

    public void changeNickname(UserDto existingUser) {
        mybatis.selectOne("UserDao.changeNickname");
    }

}
