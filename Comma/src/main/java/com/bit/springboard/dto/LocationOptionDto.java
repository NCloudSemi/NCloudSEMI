package com.bit.springboard.dto;

public class LocationOptionDto {
    private int id;
    private int locationId;
    private String optionName;
    private String optionImgUrl;
    private int optionCost;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getLocationId() {
        return locationId;
    }

    public void setLocationId(int locationId) {
        this.locationId = locationId;
    }

    public String getOptionName() {
        return optionName;
    }

    public void setOptionName(String optionName) {
        this.optionName = optionName;
    }

    public int getOptionCost() {
        return optionCost;
    }

    public void setOptionCost(int optionCost) {
        this.optionCost = optionCost;
    }

    public String getOptionImgUrl() {
        return optionImgUrl;
    }

    public void setOptionImgUrl(String optionImgUrl) {
        this.optionImgUrl = optionImgUrl;
    }

    @Override
    public String toString() {
        return "LocationOption{" +
                "id=" + id +
                ", locationId=" + locationId +
                ", optionName='" + optionName + '\'' +
                ", optionImgUrl='" + optionImgUrl + '\'' +
                ", optionCost=" + optionCost +
                '}';
    }
}
