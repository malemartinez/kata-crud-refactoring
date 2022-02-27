package com.Alejandra.ToDos.Entity;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
public class ListEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "List_id")
    private List<ToDoEntity> Todos = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
