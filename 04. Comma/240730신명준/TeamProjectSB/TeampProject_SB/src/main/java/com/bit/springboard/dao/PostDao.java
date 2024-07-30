package com.bit.springboard.dao;

import com.bit.springboard.dto.PostDto;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

@Repository
public class PostDao {

    private SqlSessionTemplate mybatis;

    @Autowired
    public PostDao(SqlSessionTemplate sqlSessionTemplate) {
        this.mybatis = sqlSessionTemplate;
    }

    public PostDto posting(PostDto postDto) {
        try{
            mybatis.insert("PostDao.posting", postDto);
            return postDto;
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }


}
