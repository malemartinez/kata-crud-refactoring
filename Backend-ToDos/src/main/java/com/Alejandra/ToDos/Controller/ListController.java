package com.Alejandra.ToDos.Controller;

import com.Alejandra.ToDos.Entity.ListEntity;
import com.Alejandra.ToDos.Model.ListModel;
import com.Alejandra.ToDos.Service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ListController {

    @Autowired
    ToDoService toDoService;

    public ListController(ToDoService toDoService) {
        this.toDoService = toDoService;
    }

    //Crear una lista
    @PostMapping(path = "/list")
    public ResponseEntity<ListModel> save(@RequestBody ListEntity list){
        return toDoService.saveList(list);
    }

    //traer todas las listas creadas
    @GetMapping(value = "/list")
    public List<ListModel> listAll(){
        return toDoService.listAll();
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
}
