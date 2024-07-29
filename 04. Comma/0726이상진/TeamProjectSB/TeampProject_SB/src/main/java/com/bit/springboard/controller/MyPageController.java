package com.bit.springboard.controller;

import com.bit.springboard.dto.MyPageDto;
import com.bit.springboard.service.MyPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class MyPageController {

    private MyPageService myPageService;

    @Autowired
    public MyPageController (MyPageService myPageService){
        this.myPageService = myPageService;
    }

    @GetMapping("/mypage")
    public String showMyPage() {
        return "mypage"; // 뷰 이름 (mypage.jsp를 가리킴)
    }

    @GetMapping("/{userId}")
    public MyPageDto getMyPage(@PathVariable int userId) {
        return myPageService.getMyPage(userId);
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
