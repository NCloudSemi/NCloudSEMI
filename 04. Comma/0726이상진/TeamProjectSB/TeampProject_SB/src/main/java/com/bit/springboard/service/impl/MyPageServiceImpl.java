package com.bit.springboard.service.impl;

import com.bit.springboard.dto.MyPageDto;
import com.bit.springboard.dto.UserDto;
import com.bit.springboard.service.MyPageService;
import org.springframework.stereotype.Service;

@Service
public class MyPageServiceImpl implements MyPageService {

    @Override
    public MyPageDto getMyPage(int userId) {
        return null;
    }

    @Override
    public void updateUserProfile(UserDto userDto) {

    }

//    @Autowired
//    private UserDao userDao;
//
//    @Autowired
//    private PostDao postDao;
//
//    @Autowired
//    private TravelPlanDao travelPlanDao;
//
//    @Autowired
//    private ReservationDao reservationDao;
//
//    @Override
//    public MyPageDto getMyPage(Long userId) {
//        MyPageDto myPageDto = new MyPageDto();
//
//        // 사용자 정보 가져오기
//        UserDto user = userDao.findById(userId);
//        myPageDto.setUserId(user.getId());
//        myPageDto.setUserNickname(user.getUserNcikname());
//        myPageDto.setUserImgUrl(user.getUserImgUrl());
//        myPageDto.setProfileMessage(user.getProfileMessage());
//
//        // 사용자 게시물 및 픽한 게시물 가져오기
//        myPageDto.setUserPosts(postDao.findPostsByUserId(userId));
//        myPageDto.setPickedPosts(postDao.findPickedPostsByUserId(userId));
//
//        // 사용자 여행 계획 및 픽한 장소 가져오기
//        myPageDto.setUserTravelPlans(travelPlanDao.findTravelPlansByUserId(userId));
//        myPageDto.setPickedPlaces(travelPlanDao.findPickedPlacesByUserId(userId));
//
//        // 사용자 예약 내역 가져오기
//        myPageDto.setUserReservations(reservationDao.findReservationsByUserId(userId));
//
//        return myPageDto;
//    }
//
//    @Override
//    public void updateUserProfile(UserDto userDto) {
//        userDao.update(userDto);
//    }
//
//    @Override
//    public void createPost(PostDto postDto) {
//        postDao.save(postDto);
//    }
//
//    @Override
//    public void createTravelPlan(TravelPlanDto travelPlanDto) {
//        travelPlanDao.save(travelPlanDto);
//    }
}

