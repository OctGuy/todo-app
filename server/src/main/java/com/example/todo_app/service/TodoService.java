package com.example.todo_app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.todo_app.entity.Todo;
import com.example.todo_app.repository.TodoRepository;

@Service
public class TodoService {

   private final TodoRepository todoRepository;

   public TodoService(TodoRepository todoRepository) {
      this.todoRepository = todoRepository;
   }

   public Todo handleTodoCreation(Todo todo) {
      Todo createdTodo = this.todoRepository.save(todo);
      return createdTodo;
   }

   public List<Todo> getAllTodos() {
      return this.todoRepository.findAll();
   }
}
