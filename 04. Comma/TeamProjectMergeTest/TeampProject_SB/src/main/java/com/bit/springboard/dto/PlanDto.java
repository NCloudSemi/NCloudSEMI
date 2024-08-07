package com.bit.springboard.dto;

public class PlanDto {

    private int id;
    private String item_data;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getItem_data() {
        return item_data;
    }

    public void setItem_data(String item_data) {
        this.item_data = item_data;
    }

    @Override
    public String toString() {
        return "PlanDto{" +
                "id=" + id +
                ", item_data='" + item_data + '\'' +
                '}';
    }
}
