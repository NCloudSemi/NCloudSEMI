package com.bit.springboard.dto;

import java.util.Arrays;



public class LocationDto {
    private int location_id;
    private String location_name;
    private String cover_img_url;
    private String[] img_urls; //take a loacation_img

    private int cost;
    private int like_cnt;
    private double grade;
    private int grade_cnt;

    //임시 데이터 수정 예정
    private String open_info;
    private String certificateion;

    //죄표값
    private double x;
    private double y;

    //장소 태그
    private String tag;

    //데이터 존재 여부 확인 => 좌표값과 이름이 동일한 데이터가 존재하는지 확인할것


    public int getLocation_id() {
        return location_id;
    }

    public void setLocation_id(int location_id) {
        this.location_id = location_id;
    }

    public String getLocation_name() {
        return location_name;
    }

    public void setLocation_name(String location_name) {
        this.location_name = location_name;
    }

    public String getCover_img_url() {
        return cover_img_url;
    }

    public void setCover_img_url(String cover_img_url) {
        this.cover_img_url = cover_img_url;
    }

    public String[] getImg_urls() {
        return img_urls;
    }

    public void setImg_urls(String[] img_urls) {
        this.img_urls = img_urls;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public int getLike_cnt() {
        return like_cnt;
    }

    public void setLike_cnt(int like_cnt) {
        this.like_cnt = like_cnt;
    }

    public double getGrade() {
        return grade;
    }

    public void setGrade(double grade) {
        this.grade = grade;
    }

    public int getGrade_cnt() {
        return grade_cnt;
    }

    public void setGrade_cnt(int grade_cnt) {
        this.grade_cnt = grade_cnt;
    }

    public String getOpen_info() {
        return open_info;
    }

    public void setOpen_info(String open_info) {
        this.open_info = open_info;
    }

    public String getCertificateion() {
        return certificateion;
    }

    public void setCertificateion(String certificateion) {
        this.certificateion = certificateion;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    @Override
    public String toString() {
        return "LocationDto{" +
                "id=" + location_id +
                ", location_name='" + location_name + '\'' +
                ", cover_img_url='" + cover_img_url + '\'' +
                ", img_urls=" + Arrays.toString(img_urls) +
                ", cost=" + cost +
                ", like_cnt=" + like_cnt +
                ", grade=" + grade +
                ", grade_cnt=" + grade_cnt +
                ", open_info='" + open_info + '\'' +
                ", certificateion='" + certificateion + '\'' +
                ", x=" + x +
                ", y=" + y +
                '}';
    }
}
