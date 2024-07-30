package com.bit.springboard.controller;

import com.bit.springboard.dao.PostDao;
import com.bit.springboard.dto.PostDto;
import com.bit.springboard.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
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
    public String main() {
        return "post/board-all-function";
    }


    //send write
    @PostMapping("/write.do")
    @ResponseBody
    public Map<String, Object> write(PostDto postDto , MultipartFile[] uploadFiles) {

       Map<String, Object> result = new HashMap<>();
       PostDto post = postService.posting(postDto , uploadFiles);
       result.put("post", post);
       return result;
    }

    /*
    //get post
    @GetMapping("/view.do")
    public String view() {

    }


    //edit post
    @GetMapping("/edit.do")
    public String edit() {

    }

    //comments
    @GetMapping("/comment.do")
    public String getComment() {

    }
    @PostMapping("/comment.do")
    public String postComment() {

    }

    @GetMapping("/reply.do")
    public String getReply() {

    }
    @PostMapping
    public String postReply() {

    }
    */




}
