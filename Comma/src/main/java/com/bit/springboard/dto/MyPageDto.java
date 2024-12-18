package com.bit.springboard.dto;

public class MyPageDto {
    // 사용자 프로필
    private int userId;
    private String userNickName;
    private String userRegion;
    private String profileImgUrl;
    private String profileMessage;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserNickName() {
        return userNickName;
    }

    public void setUserNickName(String userNickName) {
        this.userNickName = userNickName;
    }

    public String getUserRegion() {
        return userRegion;
    }

    public void setUserRegion(String userRegion) {
        this.userRegion = userRegion;
    }

    public String getProfileImgUrl() {
        return profileImgUrl;
    }

    public void setProfileImgUrl(String profileImgUrl) {
        this.profileImgUrl = profileImgUrl;
    }

    public String getProfileMessage() {
        return profileMessage;
    }

    public void setProfileMessage(String profileMessage) {
        this.profileMessage = profileMessage;
    }

    @Override
    public String toString() {
        return "MyPageDto{" +
                "userId=" + userId +
                ", userNickName='" + userNickName + '\'' +
                ", userRegion='" + userRegion + '\'' +
                ", profileImgUrl='" + profileImgUrl + '\'' +
                ", profileMessage='" + profileMessage + '\'' +
                '}';
    }
}
