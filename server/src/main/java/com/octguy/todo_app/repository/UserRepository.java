package com.octguy.todo_app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.octguy.todo_app.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

}
