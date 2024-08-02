package com.bit.springboard.service;

import com.bit.springboard.dao.PostDao;
import com.bit.springboard.dto.PostCommentDto;
import com.bit.springboard.dto.PostDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

public interface PostService {

    public PostDto posting(PostDto postDto, MultipartFile[] uploadFiles);
    public PostDto editPost(PostDto postDto, MultipartFile[] uploadFiles);
    public PostDto getPost(int id);
    public List<PostDto> getPosts( Map<String, Object> params);

    public List<PostDto> getUserPosts(int user_id);
    public List<PostDto> getUserLikes(int user_id);

    public List<PostCommentDto> getComments(int postId);

    public void toggleLike(Map<String,Object> params);

}
