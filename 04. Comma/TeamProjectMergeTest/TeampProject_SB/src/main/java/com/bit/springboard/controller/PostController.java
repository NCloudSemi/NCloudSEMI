package com.bit.springboard.controller;

import com.bit.springboard.dao.PostDao;
import com.bit.springboard.dto.PostCommentDto;
import com.bit.springboard.dto.PostDto;
import com.bit.springboard.dto.UserDto;
import com.bit.springboard.service.PostService;
import jakarta.servlet.http.HttpSession;
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
public class
PostController {

    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
       this.postService = postService;
    }

    //TEST
    @GetMapping("/test")
    public String test(@RequestParam Map<String, Object> map, HttpSession httpSession) {
        System.out.println("상진이형 화이팅");
        return "modal/board-plan-modal";
    }

    //main
    @GetMapping("/main.do")
    public String main(@RequestParam Map<String, Object> map, HttpSession httpSession,  Model model) {

        System.out.println("post_id"+map.get("post_id"));
        //check has params\
        int post_id = -1;
        if( map.get("post_id") != null)
        {
             post_id = Integer.parseInt(map.get("post_id").toString());
        }

        model.addAttribute("init_id", post_id);
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
    public Map<String, Object> getByIdPosts(UserDto userDto){
        Map<String, Object> result = new HashMap<>();
        List<PostDto> posts = postService.getUserPosts(userDto.getUser_id());
        result.put("posts", posts);
        return result;
    }

    @GetMapping("/getMyLikes")
    @ResponseBody
    public Map<String, Object> getByIdLikes(UserDto userDto){
        Map<String, Object> result = new HashMap<>();
        List<PostDto>  posts  = postService.getUserLikes(userDto.getUser_id());
        result.put("posts", posts);
        return result;
    }



    //get post
    @GetMapping("/get.do")
    @ResponseBody
    public Map<String, Object> get(PostDto post, HttpSession httpSession) {

        Integer user_id = (Integer) httpSession.getAttribute("user_id");
        //TEST 3  REAL -1
        if(user_id == null){
            user_id = 3;
        }
        Map<String, Object> params = new HashMap<>();
        params.put("user_id", user_id);
        params.put("post_id", post.getPost_id() );
        post = postService.getPost(params);
        Map<String, Object> result = new HashMap<>();
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
    public void like(@RequestParam Map<String, Object> params ) {
        System.out.println(params);
        //params.put("id", httpSession.getAttribute("user_id"));
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
