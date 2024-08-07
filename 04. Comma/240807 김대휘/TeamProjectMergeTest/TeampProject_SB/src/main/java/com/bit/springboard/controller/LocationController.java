package com.bit.springboard.controller;

import com.bit.springboard.dto.LocationDto;
import com.bit.springboard.dto.LocationOptionDto;
import com.bit.springboard.dto.LocationReviewDto;
import com.bit.springboard.dto.UserDto;
import com.bit.springboard.service.LocationService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/location")
public class LocationController {
    private final LocationService locationService;

    @Autowired
    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    //location 기본 페이지
    @GetMapping("/main.do")
    public String location(Model model) {
        return "location/main";
    }

    @GetMapping("/getMyLikes")
    @ResponseBody
    public List<LocationDto>  getMyLikes(UserDto userDto) {
        return locationService.getUserLikes(userDto.getUser_id());
    }



    //장소정보 기본 가져오기
    @GetMapping("/data.do")
    @ResponseBody
    public  Map<String, Object>  getLocation(Model model, LocationDto locationDto) {
        //default
        Map<String, Object> map = new HashMap<>();
        map.put("loc",null);

        //있나?
        LocationDto loc = locationService.get(locationDto);


        if(loc != null) {

            map.put("loc",loc);
            return map;
        }
        //없으면 post 후 리턴
        loc = locationService.post(locationDto);
        map.put("loc",loc);
        return map;

    }


    //징소 리뷰관련
    @GetMapping("/comment.do")
    @ResponseBody
    public List<LocationReviewDto>  getComment(Model model, int id) {
        return locationService.getReviews(id);
    }

    @PostMapping("/comment.do")
    @ResponseBody
    public void postComment(Model model, LocationDto locationDto) {
       return;
    }

    //장소 관련 옵션들 가져오기
    @GetMapping("/options.do")
    @ResponseBody
    public List<LocationOptionDto>  getOptions(Model model, int id) {
        return locationService.getOptions(id);
    }

    //장소 좋아요  관련
    @PostMapping("/like.do")
    @ResponseBody
    public void postLike(Model model ,LocationDto locationDto ,HttpSession session) {
        if(session.getAttribute("user") != null) {

        }
    }







}
