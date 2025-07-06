package com.example.todo_app.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "todos")
public class Todo {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   String username;

   boolean isDone;

   public Todo() {
      // Default constructor for JPA
   }

   public Todo(String username, boolean isDone) {
      this.username = username;
      this.isDone = isDone;
   }

   public Long getId() {
      return id;
   }

   public void setId(Long id) {
      this.id = id;
   }

   public String getUsername() {
      return username;
   }

   public void setUsername(String username) {
      this.username = username;
   }

   public boolean isDone() {
      return isDone;
   }

   public void setDone(boolean isDone) {
      this.isDone = isDone;
   }

}
