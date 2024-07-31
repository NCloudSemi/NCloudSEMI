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
            UserDto loginMember = userService.login(userDto);

            loginMember.setPw("");

            session.setAttribute("loginMember", loginMember);
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

    @PostMapping("/emailCheck.do")
    public Map<String, Object> emailCheck(UserDto userDto, HttpSession session) {
        return userService.emailCheck(userDto.getEmail());
    }
}
