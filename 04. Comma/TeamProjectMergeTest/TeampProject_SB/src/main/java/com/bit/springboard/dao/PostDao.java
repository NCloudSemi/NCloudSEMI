package com.bit.springboard.dao;

import com.bit.springboard.dto.PostCommentDto;
import com.bit.springboard.dto.PostDto;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@Repository
public class PostDao {

    private SqlSessionTemplate mybatis;

    @Autowired
    public PostDao(SqlSessionTemplate sqlSessionTemplate) {
        this.mybatis = sqlSessionTemplate;
    }


    //posts
    public PostDto posting(PostDto postDto) {
        System.out.println("AAAAAAAA");
        try {
            mybatis.insert("PostDao.posting", postDto);
            return postDto;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    public PostDto editPost(PostDto postDto) {
        mybatis.insert("PostDao.editPost", postDto);
        return postDto;
    }

    public List<PostDto> getPosts( Map<String, Object> params) {
        try {
            return mybatis.selectList("PostDao.getPosts");
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;

    }

    public List<PostDto> getUserPosts(int user_id) {
       return mybatis.selectList("PostDao.getUserPosts", user_id);
    }
    public List<PostDto> getUserLikes(int user_id) {
        try{
            return mybatis.selectList("PostDao.getUserLikes", user_id);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }


    public PostDto getPost(Map<String, Object> params) {
        try{
            return mybatis.selectOne("PostDao.getPost", params);
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    public void deletePost(int id) {
        mybatis.selectOne("PostDao.deletePost", id);
    }

    //postComments
    public List<PostCommentDto> getComments(int post_id) {

        return mybatis.selectList("PostDao.getComments", post_id);
    }


    //toggleLike
    public void ToggleLike(Map<String,Object> params) {
        try {
            System.out.println(params);
            Integer val = mybatis.selectOne("PostDao.checkLike", params);
            //exit
            if (val == null) {
                mybatis.insert("PostDao.insertLike", params);
            }
            //not exit
            else {
                mybatis.delete("PostDao.deleteLike", params);
            }
        }catch (Exception e){
            e.printStackTrace();
        }

    }



}
