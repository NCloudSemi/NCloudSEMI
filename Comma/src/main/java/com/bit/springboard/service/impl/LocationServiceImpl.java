package com.bit.springboard.service.impl;

import com.bit.springboard.dao.LocationDao;
import com.bit.springboard.dto.LocationDto;
import com.bit.springboard.dto.LocationOptionDto;
import com.bit.springboard.dto.LocationReviewDto;
import com.bit.springboard.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationServiceImpl implements LocationService {
    private final LocationDao locationDao ;

    @Autowired
    public LocationServiceImpl(LocationDao locationDao ) {
        this.locationDao = locationDao;
    }

    @Override
    public LocationDto post(LocationDto locationDto) {
        //관광지_img1-22
        //숙박_img1-24
        //식당_img1-26
        //엑티비티_img1-16
      try {


        //location tag 에 따른 디폴트 이미지 넣기
        if(locationDto.getTag().equals("숙박")){
            System.out.println("숙박!");
            int r_val = (int)(Math.random()*24) + 1;
            locationDto.setCover_img_url("/static/random_img/숙박_img"+r_val+".jpg");
            locationDto.setCost(100000 + (int)(Math.random()*21) *10000 );
        }
        else if(locationDto.getTag().equals("음식점") || locationDto.getTag().equals("카페")  ){
            System.out.println("FOOD!");
            int r_val = (int)(Math.random()*26) + 1;
            locationDto.setCover_img_url("/static/random_img/식당_img"+r_val+".jpg");
            locationDto.setCost( 20000 + (int)(Math.random()*80) * 1000 );
        }
        else if(locationDto.getTag().equals("관광명소")){
            System.out.println("관광지!");
            int r_val = (int)(Math.random()*22) + 1;
            locationDto.setCover_img_url("/static/random_img/관광지_img"+r_val+".jpg");
        }
        else if(locationDto.getTag().equals("문화시설")){
            System.out.println("activity!");
            int r_val = (int)(Math.random()*16) + 1;
            locationDto.setCover_img_url("/static/random_img/엑티비티_img"+r_val+".jpg");
        }
        else{
            System.out.println("random!");
            int r_val = (int)(Math.random()*26) + 1;
            locationDto.setCover_img_url("/static/random_img/식당_img"+r_val+".jpg");
        }

        System.out.println("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

        return locationDao.post(locationDto);
      }
      catch (Exception e) {
          System.out.println(e.getMessage());
          e.printStackTrace();
      }
      return null;
    }

    @Override
    public LocationDto get(LocationDto locationDto) {
        return  locationDao.get(locationDto);
    }

    @Override
    public List<LocationDto> getUserLikes(int user_id) {
        return locationDao.getUserLikes(user_id);
    }


    @Override
    public List<LocationReviewDto> getReviews(int locationId) {
        return  locationDao.getReviews(locationId);
    }

    @Override
    public List<LocationOptionDto> getOptions(int locationId) {
        return locationDao.getOptions(locationId);
    }
}
