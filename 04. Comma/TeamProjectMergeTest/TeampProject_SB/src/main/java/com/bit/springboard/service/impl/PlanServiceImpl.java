package com.bit.springboard.service.impl;

import com.bit.springboard.dao.PlanDao;
import com.bit.springboard.dto.PlanDto;
import com.bit.springboard.service.PlanService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class PlanServiceImpl implements PlanService {

    @Autowired
    private PlanDao planDao;

    @Autowired
    private ObjectMapper objectMapper;

    @Override
    public void savePlan(PlanDto planDto) throws JsonProcessingException {
        String itemDataString = objectMapper.writeValueAsString(planDto.getItem_data());
        planDto.setItem_data(itemDataString);
        planDao.savePlan(planDto);
    }

    @Override
    public Map<String, Object> getPlan(int id) throws JsonProcessingException {
        PlanDto plan = planDao.getPlan(id);
        if (plan != null) {
            // itemData를 JSON 문자열에서 Map으로 변환
            Map<String, Object> itemDataMap = objectMapper.readValue(plan.getItem_data(), new TypeReference<Map<String, Object>>() {});

            // planData를 만들고 모든 데이터를 추가
            Map<String, Object> planData = new HashMap<>();
            planData.put("id", plan.getId());
            planData.put("itemData", itemDataMap);

            return planData;
        }
        return null;
    }
}
