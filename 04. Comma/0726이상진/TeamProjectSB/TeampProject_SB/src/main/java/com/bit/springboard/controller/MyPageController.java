package com.bit.springboard.controller;

import com.bit.springboard.dao.UserDao;
import com.bit.springboard.dto.MyPageDto;
import com.bit.springboard.dto.UserDto;
import com.bit.springboard.service.MyPageService;
import com.bit.springboard.service.UserService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/mypage")
public class MyPageController {

    private MyPageService myPageService;
    private UserService userService;

    @Autowired
    public MyPageController (MyPageService myPageService, UserService userService){
        this.myPageService = myPageService;
        this.userService = userService;
    }

    @GetMapping("/main")
    public String showMyPage(UserDto userDto, Model model, HttpSession session) {
        // 로그인한 사용자 정보 가져오기
        UserDto loginUser = userService.getUser();

        // 세션에 사용자 정보 저장
        session.setAttribute("loginUser", loginUser);

        // 변경된 사용자 정보 다시 로드
        UserDto updatedUser = userService.getUser(); // 로그인한 사용자 정보 가져오기
        session.setAttribute("loginUser", updatedUser);

        // 리다이렉트 설정
        return "mypage"; // 리다이렉트할 경로 지정
    }

    @RequestMapping("/change-nickname.do")
    public String changeNickname(@ModelAttribute UserDto userDto, Model model) {

        model.addAttribute("user", userDto.getId());
        System.out.println(userDto.getId());
        try {
            String result = userService.changeNickname(userDto);

        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
        return "redirect:/mypage/main";
    }


//    @PutMapping("/profile/{userId}")
//    public void updateUserProfile(@PathVariable int userId, @RequestBody UserDto userDto) {
//        userDto.setId(userId);
//        myPageService.updateUserProfile(userDto);
//    }
//
//    @PostMapping("/posts")
//    public void createPost(@RequestBody PostDto postDto) {
//        myPageService.createPost(postDto);
//    }
//
//    @PostMapping("/travel-plans")
//    public void createTravelPlan(@RequestBody TravelPlanDto travelPlanDto) {
//        myPageService.createTravelPlan(travelPlanDto);
//    }


}
