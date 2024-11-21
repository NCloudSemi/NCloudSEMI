package com.bit.springboard.service;

import com.bit.springboard.dto.LocationDto;
import com.bit.springboard.dto.LocationOptionDto;
import com.bit.springboard.dto.LocationReviewDto;

import java.util.List;

public interface LocationService {

    //location
    public LocationDto post (LocationDto locationDto);
    public LocationDto get(LocationDto locationDto);
    public List<LocationDto> getUserLikes(int user_id);

    //location-utile
    public List<LocationReviewDto> getReviews(int locationId);
    public List<LocationOptionDto> getOptions(int locationId);
}
