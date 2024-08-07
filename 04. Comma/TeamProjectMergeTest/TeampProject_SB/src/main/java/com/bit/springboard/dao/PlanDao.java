package com.bit.springboard.dao;

import com.bit.springboard.dto.PlanDto;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class PlanDao {

    private SqlSessionTemplate mybatis;

    @Autowired
    public PlanDao(SqlSessionTemplate mybatis) {
        this.mybatis = mybatis;
    }

    public void savePlan(PlanDto planDto) {
        System.out.println("PlanDao의 savePlan메소드 실행");
        mybatis.insert("PlanDao.savePlan", planDto);
    }

    public PlanDto getPlan(int id) {
        System.out.println("PlanDao의 getPlan메소드 실행");
        System.out.println(id);
        return mybatis.selectOne("PlanDao.getPlan", id);
    }
}
