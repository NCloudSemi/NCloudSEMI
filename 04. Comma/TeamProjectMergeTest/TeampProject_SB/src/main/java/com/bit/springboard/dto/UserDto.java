package com.bit.springboard.dto;

public class UserDto {

    private int user_id;
    private String email;
    private String pw;
    private String nickname;
    private String gender;
    private String address;
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
        String transformedAddress = transformAddress(this.address); // 로드할 때 변환된 주소 반환
        System.out.println("Original Address: " + this.address);
        System.out.println("Transformed Address: " + transformedAddress);
        return transformedAddress;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDetailed_address() {
        return detailed_address;
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

    private String transformAddress(String address) {
        if (address == null) {
            return null;
        }
        if (address.startsWith("서울")) {
            return "Seoul";
        } else if (address.startsWith("부산")) {
            return "Busan";
        } else if (address.startsWith("대구")) {
            return "Daegu";
        } else if (address.startsWith("인천")) {
            return "Incheon";
        } else if (address.startsWith("광주")) {
            return "Gwangju";
        } else if (address.startsWith("대전")) {
            return "Daejeon";
        } else if (address.startsWith("울산")) {
            return "Ulsan";
        } else if (address.startsWith("세종")) {
            return "Sejong";
        } else if (address.startsWith("경기")) {
            return "Gyeonggi";
        } else if (address.startsWith("강원")) {
            return "Gangwon";
        } else if (address.startsWith("충북")) {
            return "Chungbuk";
        } else if (address.startsWith("충남")) {
            return "Chungnam";
        } else if (address.startsWith("전북")) {
            return "Jeonbuk";
        } else if (address.startsWith("전남")) {
            return "Jeonnam";
        } else if (address.startsWith("경북")) {
            return "Gyeongbuk";
        } else if (address.startsWith("경남")) {
            return "Gyeongnam";
        } else if (address.startsWith("제주")) {
            return "Jeju";
        } else {
            return address;
        }
    }

    @Override
    public String toString() {
        return "UserDto{" +
                "user_id=" + user_id +
                ", email='" + email + '\'' +
                ", pw='" + pw + '\'' +
                ", nickname='" + nickname + '\'' +
                ", gender='" + gender + '\'' +
                ", address='" + address + '\'' +
                ", detailed_address='" + detailed_address + '\'' +
                ", profile_img='" + profile_img + '\'' +
                ", score=" + score +
                ", message='" + message + '\'' +
                '}';
    }
}
