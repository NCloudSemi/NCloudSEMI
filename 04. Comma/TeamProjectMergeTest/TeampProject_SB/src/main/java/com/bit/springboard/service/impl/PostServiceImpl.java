package com.bit.springboard.service.impl;

import com.bit.springboard.common.FileUtils;
import com.bit.springboard.dao.LocationDao;
import com.bit.springboard.dao.PostDao;
import com.bit.springboard.dto.PostCommentDto;
import com.bit.springboard.dto.PostDto;
import com.bit.springboard.service.PostService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Service
public class PostServiceImpl implements PostService {

    private final PostDao postDao ;

    @Autowired
    public PostServiceImpl(PostDao postDao ) {
        this.postDao= postDao;
    }

    @Override
    public PostDto posting(PostDto postDto, MultipartFile[] uploadFiles) {

        List<String> filePathList = new ArrayList<>();
        if(uploadFiles != null && uploadFiles.length > 0) {
            // 업로드 폴더 지정
            String attachPath = "C:/tmp/upload/";
            File directory = new File(attachPath);
            // 업로드 폴더가 존재하지 않으면 폴더 생성
            if(!directory.exists()) {
                // 하위폴더도 생성하려면 mkdirs 메소드를 호출한다.
                directory.mkdirs();
            }
            Arrays.stream(uploadFiles).forEach(file -> {
                if(file.getOriginalFilename() != null && !file.getOriginalFilename().equals("")) {
                    //파일 주소들
                    filePathList.add(FileUtils.saveFile(file ,attachPath));
                }
            });
        }

        //list 작업
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            // ArrayList를 JSON 문자열로 변환
            String pathString = objectMapper.writeValueAsString(filePathList);
            postDto.setPost_img(pathString); //set file path
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }


        return postDao.posting(postDto);
    }

    @Override
    public PostDto editPost(PostDto postDto, MultipartFile[] uploadFiles) {
        List<String> filePathList = new ArrayList<>();
        if(uploadFiles != null && uploadFiles.length > 0) {
            // 업로드 폴더 지정
            String attachPath = "C:/tmp/upload/";
            File directory = new File(attachPath);

            Arrays.stream(uploadFiles).forEach(file -> {
                if(file.getOriginalFilename() != null && !file.getOriginalFilename().equals("")) {
                    //파일 주소들
                    filePathList.add(attachPath + file.getOriginalFilename());
                }
            });
        }

        //list 작업
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            // ArrayList를 JSON 문자열로 변환
            String pathString = objectMapper.writeValueAsString(filePathList);
            postDto.setPost_img(pathString); //set file path
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }


        return postDao.posting(postDto);
    }

    @Override
    public PostDto getPost(int id) {
        return postDao.getPost(id);
    }

    @Override
    public List<PostDto> getPosts( Map<String, Object> params) {
        return postDao.getPosts(params);
    }

    @Override
    public List<PostDto> getUserPosts(int user_id) {
        return postDao.getUserPosts(user_id);
    }

    @Override
    public List<PostDto> getUserLikes(int user_id) {
        return postDao.getUserLikes(user_id);
    }

    @Override
    public List<PostCommentDto> getComments(int postId) {
        return postDao.getComments(postId);
    }

    @Override
    public void toggleLike(Map<String, Object> params) {
            postDao.ToggleLike(params);
    }
}
