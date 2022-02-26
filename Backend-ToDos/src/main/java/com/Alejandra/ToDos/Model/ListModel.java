package com.Alejandra.ToDos.Model;

import com.Alejandra.ToDos.Entity.ToDoEntity;

import java.util.ArrayList;
import java.util.List;

public class ListModel {

    private Long id;
    private String name;
    private List<ToDoEntity> Todos = new ArrayList<>();

    public ListModel(Long id, String name, List<ToDoEntity> todos) {
        this.id = id;
        this.name = name;
        Todos = todos;
    }
    public ListModel(){}

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<ToDoEntity> getTodos() {
        return Todos;
    }

    public void setTodos(List<ToDoEntity> todos) {
        Todos = todos;
    }
}
