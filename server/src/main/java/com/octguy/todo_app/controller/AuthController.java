package com.octguy.todo_app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.octguy.todo_app.dto.auth.LoginRequest;
import com.octguy.todo_app.dto.user.request.UserCreateRequest;
import com.octguy.todo_app.dto.user.response.UserResponseDTO;
import com.octguy.todo_app.service.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;
    
    @PostMapping("/login")
    public ResponseEntity<UserResponseDTO> login(LoginRequest request) {
        UserResponseDTO response = authService.login(request);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponseDTO> register(UserCreateRequest request) {
        UserResponseDTO response = authService.register(request);
        return ResponseEntity.ok(response);
    }

}
