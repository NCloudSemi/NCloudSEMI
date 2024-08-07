package com.bit.springboard.dto;

public class UserDto {

    private int user_id;
    private String email;
    private String pw;
    private String nickname;
    private String gender;
    private String address;
    private String e_address;
    private String detailed_address;
    private String profile_img;
    private int score;
    private String message;

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPw() {
        return pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    // 원본 주소를 반환하는 메서드 추가
    public String getOriginalAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getE_address() {
        return e_address;
    }

    public void setE_address(String e_address) {
        this.e_address = e_address;
    }

    public String getDetailed_address() {
        return detailed_address;
    }

    public String getE_address() {
        return e_address;
    }

    public void setE_address(String e_address) {
        this.e_address = e_address;
    }

    public void setDetailed_address(String detailed_address) {
        this.detailed_address = detailed_address;
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

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "UserDto{" +
                "email='" + email + '\'' +
                ", pw='" + pw + '\'' +
                ", nickname='" + nickname + '\'' +
                ", gender='" + gender + '\'' +
                ", address='" + address + '\'' +
                ", e_address='" + e_address + '\'' +
                ", detailed_address='" + detailed_address + '\'' +
                ", profile_img='" + profile_img + '\'' +
                ", score=" + score +
                ", message='" + message + '\'' +
                '}';
    }
}
