package com.bit.springboard.controller;

import com.bit.springboard.dto.UserDto;
import com.bit.springboard.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/user")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/login.do")
    public String loginView() {
        return "user/login";
    }

    @PostMapping("/login.do")
    public String login(UserDto userDto, Model model, HttpSession session) {

        try {
            UserDto loginUser = userService.login(userDto);

            loginUser.setPw("");

            session.setAttribute("loginUser", loginUser);
            System.out.println("로그인 성공");
            System.out.println("----------------------------");

            return "home";
        } catch (Exception e) {
            System.out.println(e.getMessage() + ", 로그인 실패");
            System.out.println("----------------------------");
            model.addAttribute("loginFailMsg", e.getMessage());
            return "/user/login";
        }
    }

    @PostMapping("/join.do")
    public String join(UserDto userDto) {
        System.out.println("Controller join 메소드 실행");
        System.out.println(userDto.toString());
        userService.join(userDto);
        return "/user/login";
    }

    @PostMapping("/emailCheck.do")
    @ResponseBody
    public Map<String, Object> emailCheck(UserDto userDto) {

        return userService.emailCheck(userDto.getEmail());
    }

    @PostMapping("/nameCheck.do")
    @ResponseBody
    public Map<String, Object> nameCheck(UserDto userDto) {
        return userService.nameCheck(userDto.getNickname());
    }
}
