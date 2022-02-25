package com.Alejandra.ToDos.Controller;

import com.Alejandra.ToDos.Entity.ListEntity;
import com.Alejandra.ToDos.Entity.ToDoEntity;
import com.Alejandra.ToDos.Model.ListModel;
import com.Alejandra.ToDos.Model.ToDoModel;
import com.Alejandra.ToDos.Service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ToDoController {

    @Autowired
    ToDoService toDoService;

    public ToDoController(ToDoService toDoService) {
        this.toDoService = toDoService;
    }

    //Crear una lista
    @PostMapping(path = "/list")
    public void save(@RequestBody ListEntity list){
        toDoService.saveList(list);
    }


    //Crear un todo dependiendo del id de la lista
    @PostMapping(path = "/todo/{listId}")
    public ToDoModel save(@RequestBody ToDoEntity todo , @PathVariable("listId") Long ListId){
        return toDoService.save(todo, ListId );
    }

    //me trae todos los ToDos de la base de datos segun el listId
    @GetMapping(value = "/list/todos/{listId}")
    public List<ToDoEntity> list(@PathVariable("listId") Long listId){
        return toDoService.list(listId);
    }

    //traer todas las listas creadas
    @GetMapping(value = "/list")
    public List<ListEntity> listAll(){
        return toDoService.listAll();
    }



    //Actualiza el ToDo gracias al id de la lista
    @PutMapping(path = "/todo/{listId}")
    public ToDoModel update(@RequestBody ToDoEntity todo , @PathVariable("listId") Long ListId){
        return toDoService.update(ListId,todo);
    }

    //Actualiza nombre de la lista
    @PutMapping(path = "/list/{listId}")
    public ListModel update(@RequestBody ListEntity list , @PathVariable("listId") Long ListId){
        return toDoService.updateList(ListId,list);
    }

    //Eliminar lista
    @DeleteMapping(value = "/list/{id}")
    public void deleteList(@PathVariable("id")Long id){
        toDoService.deleteList(id);
    }

    //Elimina algun ToDo de acuerdo al id
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(value = "/todo/{id}")
    public void delete(@PathVariable("id")Long id){
        toDoService.delete(id);
    }





}
