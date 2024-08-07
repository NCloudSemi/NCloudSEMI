package com.bit.springboard.service;

import com.bit.springboard.dto.PlanDto;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.Map;

public interface PlanService {

    void savePlan(PlanDto planDto) throws JsonProcessingException;

    Map<String, Object> getPlan(int id) throws JsonProcessingException;
}
