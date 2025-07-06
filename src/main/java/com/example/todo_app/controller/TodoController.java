package com.example.todo_app.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.todo_app.entity.Todo;
import com.example.todo_app.service.TodoService;

@RestController
public class TodoController {

   private final TodoService todoService;

   public TodoController(TodoService todoService) {
      this.todoService = todoService;
   }

   @GetMapping("/create-todos")
   public String index() {
      Todo myTodo = new Todo("Tran Duc Thinh", false);
      Todo newTodo = this.todoService.handleTodoCreation(myTodo);
      return "Created todo for user: " + newTodo.getUsername() + 
             " with status: " + newTodo.isDone() + 
             " and ID: " + newTodo.getId();
   }

   @GetMapping("/get-todos")
   public List<Todo> getTodos() {
      return this.todoService.getAllTodos();
   }
}
