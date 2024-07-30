package com.bit.springboard.service;

import com.bit.springboard.dao.PostDao;
import com.bit.springboard.dto.PostDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface PostService {

    public PostDto posting(PostDto postDto, MultipartFile[] uploadFiles);
    public PostDto getPost();
    public List<PostDto> getPosts();



}
