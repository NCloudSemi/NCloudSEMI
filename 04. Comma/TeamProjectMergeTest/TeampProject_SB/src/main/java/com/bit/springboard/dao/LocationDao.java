package com.bit.springboard.dao;

import com.bit.springboard.dto.LocationDto;
import com.bit.springboard.dto.LocationOptionDto;
import com.bit.springboard.dto.LocationReviewDto;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class LocationDao {

    private SqlSessionTemplate mybatis;

    @Autowired
    public LocationDao(SqlSessionTemplate sqlSessionTemplate) {
        this.mybatis = sqlSessionTemplate;
    }


    public LocationDto post(LocationDto locationDto){
        try {
            System.out.println("HEAR DAO");
            mybatis.insert("LocationDao.post", locationDto);
            return locationDto;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    public LocationDto get(LocationDto locationDto){
        return mybatis.selectOne("LocationDao.get",locationDto);
    }

    public List<LocationDto> getUserLikes(int user_id){
        return mybatis.selectList("LocationDao.getUserLikes",user_id);
    }

    public List<LocationReviewDto> getReviews(int locationId){
        return mybatis.selectList("LocationDao.getReviews",locationId);
    }

    public List<LocationOptionDto> getOptions(int locationId){
        return mybatis.selectList("LocationDao.getOptions",locationId);
    }


}
