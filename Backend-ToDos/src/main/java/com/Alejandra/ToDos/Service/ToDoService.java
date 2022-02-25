package com.Alejandra.ToDos.Service;

import com.Alejandra.ToDos.Entity.ListEntity;
import com.Alejandra.ToDos.Entity.ToDoEntity;
import com.Alejandra.ToDos.Model.ListModel;
import com.Alejandra.ToDos.Model.ToDoModel;
import com.Alejandra.ToDos.Repository.ListInterface;
import com.Alejandra.ToDos.Repository.ToDoInterface;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ToDoService {

    @Autowired
    ToDoInterface toDoInterface;
    ListInterface listInterface;

    public ToDoService(ToDoInterface toDoInterface, ListInterface listInterface) {
        this.toDoInterface = toDoInterface;
        this.listInterface = listInterface;
    }


    //guardar una lista nueva
    public ResponseEntity<ListModel> saveList(ListEntity list){
        ListModel listModel = new ListModel();
        ListEntity list1 = new ListEntity(list.getName());
        listInterface.save(list1);
        BeanUtils.copyProperties(list1, listModel);
        return new ResponseEntity<>(listModel, HttpStatus.OK);
    }

    //guardar ToDo dependiendo del id de la lista
    public ToDoModel save(ToDoEntity todo , Long ListId) {
        var todoDTO = new ToDoModel();
        try {
            if (todo.getName().isEmpty() || todo.getName().length() < 3) {
                throw new Exception("Entidad no válida para guardar");
            }

            var todo1 = new ToDoEntity(todo.getName(), todo.isCompleted(), todo.getListID());
            var list = listInterface.findById(ListId).get();
            list.getTodos().add(todo1);
            listInterface.save(list);
            BeanUtils.copyProperties(todo1, todoDTO);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return todoDTO;
    }


    //traer TODOS los Todos dependiendo de la categoria
    public List<ToDoEntity> list(Long listId){
        var toDos = listInterface.findById(listId).get().getTodos();
         return  toDos;
    }

    //traer todas las listas creadas
    public List<ListEntity> listAll(){
        var lists =  listInterface.findAll();
        return lists;
    }

    //Actualizar el todo
    public ToDoModel update(Long listID, ToDoEntity todo){
        var todoDTO = new ToDoModel();
        var todo1 = new ToDoEntity(todo.getName(), todo.isCompleted(), todo.getListID());
        todo1.setId(todo.getId());
        var lista = listInterface.findById(listID).get().getTodos();
        for (var item:lista) {
            if(item.getId() == todo1.getId() ){
                toDoInterface.save(todo1);

            }
        }
        BeanUtils.copyProperties(todo1, todoDTO);
        return todoDTO;


    }
    //Actualizar el nombre de la lista
    public ListModel updateList(Long id , ListEntity list){
        var ListDTO = new ListModel();
        if(listInterface.findById(id).isEmpty()){
            throw new RuntimeException("No existe esta lista");
        }
        var list1 = new ListEntity(list.getName());
        list1.setId(list.getId());
        listInterface.save(list1);
        BeanUtils.copyProperties(list1, ListDTO);
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
