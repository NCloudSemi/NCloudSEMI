package com.bit.springboard.dto;

public class PostCommentDto {
    private int comment_id; //ID
    private int post_id;   //POST_ID
    private int id;        //USER_ID
    private String comment_content;
    private String comment_tag;
    private int like_cnt;
    private String reg_date;

    //userDB
    private String nickname;
    private String address;
    private String profile_img;
    private int score;

    //is_LIKE
    private boolean is_like;

    //get set
    public int getComment_id() {
        return comment_id;
    }

    public void setComment_id(int comment_id) {
        this.comment_id = comment_id;
    }

    public int getPost_id() {
        return post_id;
    }

    public void setPost_id(int post_id) {
        this.post_id = post_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getComment_content() {
        return comment_content;
    }

    public void setComment_content(String comment_content) {
        this.comment_content = comment_content;
    }

    public int getLike_cnt() {
        return like_cnt;
    }

    public void setLike_cnt(int like_cnt) {
        this.like_cnt = like_cnt;
    }

    public String getComment_tag() {
        return comment_tag;
    }

    public void setComment_tag(String comment_tag) {
        this.comment_tag = comment_tag;
    }

    public String getReg_date() {
        return reg_date;
    }

    public void setReg_date(String reg_date) {
        this.reg_date = reg_date;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getProfile_img() {
        return profile_img;
    }

    public void setProfile_img(String profile_img) {
        this.profile_img = profile_img;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public boolean isIs_like() {
        return is_like;
    }

    public void setIs_like(boolean is_like) {
        this.is_like = is_like;
    }

    @Override
    public String toString() {
        return "PostCommentDto{" +
                "comment_id=" + comment_id +
                ", post_id=" + post_id +
                ", id=" + id +
                ", comment_content='" + comment_content + '\'' +
                ", comment_tag='" + comment_tag + '\'' +
                ", like_cnt=" + like_cnt +
                ", reg_date='" + reg_date + '\'' +
                '}';
    }

}
