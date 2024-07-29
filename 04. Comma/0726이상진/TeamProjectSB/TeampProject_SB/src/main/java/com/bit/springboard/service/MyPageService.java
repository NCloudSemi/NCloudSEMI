package com.bit.springboard.service;

import com.bit.springboard.dto.MyPageDto;
import com.bit.springboard.dto.UserDto;

public interface MyPageService {
//    String changeProfile(String profile);
//
//    String getPickBoards(String board);
//
//    String getPickPlaces(String place);
//
//    String getMyGrade(String grade);
//
//    String changeStatusMessage(String message);

    MyPageDto getMyPage(int userId);

    void updateUserProfile(UserDto userDto);

//    void createPost(BoardDto boardDto);
//    void createTravelPlan(TravelPlanDto travelPlanDto);
}
