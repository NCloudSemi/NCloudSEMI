package com.bit.springboard.controller;

import com.bit.springboard.dao.PostDao;
import com.bit.springboard.dto.PostCommentDto;
import com.bit.springboard.dto.PostDto;
import com.bit.springboard.dto.UserDto;
import com.bit.springboard.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.objenesis.instantiator.basic.AccessibleInstantiator;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/post")
public class PostController {

    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
       this.postService = postService;
    }

    //main
    @GetMapping("/main.do")
    public String main(Model model) {
        return "post/board-all-function";
    }

    //get post
    @GetMapping("/view.do")
    @ResponseBody
    public Map<String, Object> view(@RequestParam Map<String, Object> params, Model model) {
        System.out.println(params);
        Map<String, Object> result = new HashMap<>();
        List<PostDto> posts = postService.getPosts(params);
        result.put("posts", posts);
        return result;
    }


    @GetMapping("/getMyPost")
    @ResponseBody
    public List<PostDto> getByIdPosts(UserDto userDto){
        return postService.getUserPosts(userDto.getUser_id());
    }

    @GetMapping("/getMyLikes")
    @ResponseBody
    public List<PostDto> getByIdLikes(UserDto userDto){
        return postService.getUserLikes(userDto.getUser_id());
    }



    //get post
    @GetMapping("/get.do")
    @ResponseBody
    public Map<String, Object> get(PostDto post, Model model) {
        Map<String, Object> result = new HashMap<>();
        post = postService.getPost(post.getPost_id());
        System.out.println(post);
        result.put("post", post);
        return result;
    }


    //send write
    @PostMapping("/write.do")
    @ResponseBody
    public Map<String, Object> write(PostDto postDto , MultipartFile[] uploadFiles) {
        System.out.println(postDto );
       Map<String, Object> result = new HashMap<>();
       PostDto post = postService.posting(postDto , uploadFiles);
       result.put("post", post);
       return result;
    }


    //edit post
    @GetMapping("/edit.do")
    @ResponseBody
    public Map<String, Object> edit(PostDto postDto , MultipartFile[] uploadFiles ) {
       Map<String, Object> result = new HashMap<>();
       PostDto post = postService.editPost(postDto , uploadFiles);
       result.put("post", post);
       return result;
    }


    //comments
    @GetMapping("/comment.do")
    @ResponseBody
    public Map<String, Object>  getComment(int post_id) {
        Map<String, Object> result = new HashMap<>();
        List<PostCommentDto> comments  = postService.getComments(post_id);
        System.out.println(comments);
        result.put("comments", comments);
        return result;
    }

    /*
    @PostMapping("/comment.do")
    @ResponseBody
    public Map<String, Object>  postComment(int post_id) {

    }
    */

    @PostMapping("/like.do")
    public void like(@RequestParam Map<String, Object> params) {
        System.out.println(params);
        postService.toggleLike(params);
    }


    /*
    @GetMapping("/reply.do")
    public Map<String, Object>  getReply(int comment_id) {

    }
    @PostMapping
    public Map<String, Object>  postReply(int comment_id) {

    }
    */




}
