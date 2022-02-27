package com.Alejandra.ToDos.Controller;

import com.Alejandra.ToDos.Entity.ListEntity;
import com.Alejandra.ToDos.Entity.ToDoEntity;
import com.Alejandra.ToDos.Model.ListModel;
import com.Alejandra.ToDos.Model.ToDoModel;
import com.Alejandra.ToDos.Service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
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

    //Crear un todo dependiendo del id de la lista
    @PostMapping(path = "/todo/{listId}")
    public ResponseEntity<ToDoModel> save(@RequestBody ToDoEntity todo , @PathVariable("listId") Long ListId) throws Exception {
        return toDoService.save(todo, ListId );
    }

    //me trae todos los ToDos de la base de datos segun el listId
    @GetMapping(value = "/list/todos/{listId}")
    public List<ToDoModel> list(@PathVariable("listId") Long listId){
        return toDoService.list(listId);
    }


    //Actualiza el ToDo gracias al id de la lista
    @PutMapping(path = "/todo/{listId}")
    public ToDoModel update(@RequestBody ToDoEntity todo , @PathVariable("listId") Long ListId){
        return toDoService.update(ListId,todo);
    }

    //Elimina algun ToDo de acuerdo al id
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(value = "/todo/{id}")
    public void delete(@PathVariable("id")Long id){
        toDoService.delete(id);
    }





}
