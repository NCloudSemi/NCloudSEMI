package com.bit.springboard.dto;

public class UserDto {

    private int id;
    private String email;
    private String password;
    private String name;
    private Gender gender;
    private String region;
    private String detailed_region;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", gender=" + gender +
                ", region='" + region + '\'' +
                ", detailed_region='" + detailed_region + '\'' +
                '}';
    }
}
