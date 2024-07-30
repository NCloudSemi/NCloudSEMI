package com.bit.springboard.controller;

import com.bit.springboard.dto.UserDto;
import com.bit.springboard.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
@RequestMapping("/user")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/usernameCheck.do")
    @ResponseBody
    public Map<String, Object> usernameCheck(UserDto userDto) {

        System.out.println(userDto.getUsername());
        System.out.println(userService.usernameCheck(userDto.getUsername()));
        return userService.usernameCheck(userDto.getUsername());
    }
}
