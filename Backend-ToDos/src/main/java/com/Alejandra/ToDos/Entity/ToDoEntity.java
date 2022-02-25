package com.Alejandra.ToDos.Entity;

import javax.persistence.*;

@Entity
public class ToDoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
    private boolean Completed;
    private long listID;

    public ToDoEntity() {
    }

    public ToDoEntity(String name, boolean completed, long listID) {
        this.name = name;
        this.Completed = completed;
        this.listID = listID;
    }

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
