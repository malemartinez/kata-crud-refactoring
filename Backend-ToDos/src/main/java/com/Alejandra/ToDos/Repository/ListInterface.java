package com.Alejandra.ToDos.Repository;

import com.Alejandra.ToDos.Entity.ListEntity;
import com.Alejandra.ToDos.Model.ListModel;
import com.Alejandra.ToDos.Model.ToDoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ListInterface extends JpaRepository<ListEntity, Long> {

}
