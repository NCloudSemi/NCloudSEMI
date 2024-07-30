package com.bit.springboard.dto;

public class UserDto {

    private int id;
    private String username;
    private String password;
    private String nickname;
    private Gender gender;
    private String region;
    private String detailed_region;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getDetailed_region() {
        return detailed_region;
    }

    public void setDetailed_region(String detailed_region) {
        this.detailed_region = detailed_region;
    }

    @Override
    public String toString() {
        return "UserDto{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", nickname='" + nickname + '\'' +
                ", gender=" + gender +
                ", region='" + region + '\'' +
                ", detailed_region='" + detailed_region + '\'' +
                '}';
    }
}
