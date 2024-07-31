package com.bit.springboard.service.impl;

import com.bit.springboard.dao.UserDao;
import com.bit.springboard.dto.MyPageDto;
import com.bit.springboard.dto.UserDto;
import com.bit.springboard.service.MyPageService;
import org.springframework.stereotype.Service;

@Service
public class MyPageServiceImpl implements MyPageService {

    private UserDao userDao;

    @Override
    public MyPageDto getMyPage(int user_Id) {
        return null;
    }


}

