package com.bit.springboard.controller;

import com.bit.springboard.dto.PlanDto;
import com.bit.springboard.service.PlanService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@RequestMapping("/plan")
public class PlanController {

    @Autowired
    private PlanService planService;

    @Autowired
    private ObjectMapper objectMapper;

    @PostMapping("savePlan.do")
    public String savePlan(@RequestParam int id, @RequestBody Map<String, Object> itemData) throws JsonProcessingException {
        System.out.println("PlanController의 savePlan메소드 실행");

        String itemDataString = objectMapper.writeValueAsString(itemData);

        PlanDto planDto = new PlanDto();
        planDto.setId(id);
        planDto.setItem_data(itemDataString);

        planService.savePlan(planDto);
        return "Plan saved successfully!";
    }

    @GetMapping("/{id}")
    public String getPlan(@PathVariable int id, Model model) throws JsonProcessingException {
        Map<String, Object> planData = planService.getPlan(id);
        model.addAttribute("planData", planData);
        System.out.println("Plan Data: " + planData); // 콘솔에 출력하여 데이터 확인
        return "plan/details";
    }
}

