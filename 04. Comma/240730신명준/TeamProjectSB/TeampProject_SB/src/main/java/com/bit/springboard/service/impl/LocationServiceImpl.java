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
        return locationDao.post(locationDto);
    }

    @Override
    public LocationDto get(LocationDto locationDto) {
        return  locationDao.get(locationDto);
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
