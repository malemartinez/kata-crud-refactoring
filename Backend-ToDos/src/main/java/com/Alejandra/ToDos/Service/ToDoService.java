package com.Alejandra.ToDos.Service;

import com.Alejandra.ToDos.Entity.ListEntity;
import com.Alejandra.ToDos.Entity.ToDoEntity;
import com.Alejandra.ToDos.Model.ListModel;
import com.Alejandra.ToDos.Model.ToDoModel;
import com.Alejandra.ToDos.Repository.ListInterface;
import com.Alejandra.ToDos.Repository.ToDoInterface;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ToDoService {

    @Autowired
    ToDoInterface toDoInterface;
    ListInterface listInterface;
    ModelMapper mapper;

    public ToDoService(ToDoInterface toDoInterface, ListInterface listInterface ,ModelMapper mapper ) {
        this.toDoInterface = toDoInterface;
        this.listInterface = listInterface;
        this.mapper = mapper;
    }


    //guardar una lista nueva
    public ResponseEntity<String> saveList(ListEntity list){
        ListEntity list1 = new ListEntity();
        list1.setName(list.getName());
        listInterface.save(list1);

        return new ResponseEntity<>("", HttpStatus.OK);
    }

    //guardar ToDo dependiendo del id de la lista
    public ResponseEntity<String> save(ToDoEntity todo , Long ListId) throws Exception {

        if (todo.getName().isEmpty() || todo.getName().length() < 3) {
            throw new Exception("Entidad no válida para guardar");
        }

        var todo1 = new ToDoEntity();
        todo1.setName(todo.getName());
        todo1.setCompleted(todo.isCompleted());
        todo1.setListID(todo.getListID());
        var list = listInterface.findById(ListId).get();
        list.getTodos().add(todo1);
        listInterface.save(list);

        return new ResponseEntity<>("", HttpStatus.OK);



    }


    //traer TODOS los Todos dependiendo de la categoria
    public List<ToDoModel> list(Long listId){
        List<ToDoModel> DTO = new ArrayList<>();
        var toDos = listInterface.findById(listId).get().getTodos();
        for (var item :toDos) {
            DTO.add(mapper.map(item, ToDoModel.class));
        }
         return  DTO;
    }

    //traer todas las listas creadas
    public List<ListModel> listAll(){
        List<ListModel> DTO = new ArrayList<>();
        var lists =  listInterface.findAll();
        for (var item :lists) {
            DTO.add(mapper.map(item, ListModel.class));
        }
        return DTO;
    }

    //Actualizar el todo
    public ToDoModel update(Long listID, ToDoEntity todo){
        var todoDTO = new ToDoModel();
        var todo1 = new ToDoEntity();
        todo1.setName(todo.getName());
        todo1.setCompleted(todo.isCompleted());
        todo1.setListID(todo.getListID());
        todo1.setId(todo.getId());
        var lista = listInterface.findById(listID).get().getTodos();
        for (var item:lista) {
            if(item.getId() == todo1.getId() ){
                toDoInterface.save(todo1);

            }
        }
        todoDTO = mapper.map(todo1, ToDoModel.class);
        return todoDTO;


    }
    //Actualizar el nombre de la lista
    public ListModel updateList(Long id , ListEntity list){
        var ListDTO = new ListModel();
        if(listInterface.findById(id).isEmpty()){
            throw new RuntimeException("No existe esta lista");
        }
        var list1 = new ListEntity();
        list1.setName(list.getName());
        list1.setId(list.getId());
        listInterface.save(list1);
        ListDTO = mapper.map(list1, ListModel.class);
        return ListDTO;
    }




    //Eliminar un todo
    public ResponseEntity<String> delete(Long id) {
        try{
            toDoInterface.deleteById(id);
            return new ResponseEntity<>( "Eliminado", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    //Elimina una lista completa
    public void deleteList(Long id) {
        listInterface.deleteById(id);
    }





}
