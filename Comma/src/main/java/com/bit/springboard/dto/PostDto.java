package com.bit.springboard.dto;

public class PostDto {

    //post DB
    private int post_id;
    private int id;
    private String title;
    private String content;

    private int plan_id;
    private int like_cnt;
    private String reg_date;
    private String post_img;

    //userDB
    private String nickname;
    private String address;
    private String profile_img;
    private int score;

    //is_LIKE
    private boolean is_like;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPost_id() {
        return post_id;
    }

    public void setPost_id(int post_id) {
        this.post_id = post_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getPlan_id() {
        return plan_id;
    }

    public void setPlan_id(int plan_id) {
        this.plan_id = plan_id;
    }

    public int getLike_cnt() {
        return like_cnt;
    }

    public void setLike_cnt(int like_cnt) {
        this.like_cnt = like_cnt;
    }

    public String getReg_date() {
        return reg_date;
    }

    public void setReg_date(String reg_date) {
        this.reg_date = reg_date;
    }

    public String getPost_img() {
        return post_img;
    }

    public void setPost_img(String post_img) {
        this.post_img = post_img;
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

    @Override
    public String toString() {
        return "PostDto{" +
                "post_id=" + post_id +
                ", id=" + id +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", plan_id=" + plan_id +
                ", like_cnt=" + like_cnt +
                ", reg_date='" + reg_date + '\'' +
                ", post_img='" + post_img + '\'' +
                '}';
    }
}
