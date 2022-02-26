package com.Alejandra.ToDos.Model;

public class ToDoModel {

    private long id;
    private String name;
    private boolean Completed;
    private Long listID;

    public ToDoModel(long id, String name, boolean completed, Long listID) {
        this.id = id;
        this.name = name;
        Completed = completed;
        this.listID = listID;
    }
    public ToDoModel (){}

    public Long getListID() {
        return listID;
    }

    public void setListID(Long listID) {
        this.listID = listID;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isCompleted() {
        return Completed;
    }

    public void setCompleted(boolean completed) {
        Completed = completed;
    }

}
