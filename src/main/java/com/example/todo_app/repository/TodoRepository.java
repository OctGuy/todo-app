package com.example.todo_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.todo_app.entity.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    // This interface will automatically provide CRUD operations for the Todo entity
    // Additional custom query methods can be defined here if needed

}
