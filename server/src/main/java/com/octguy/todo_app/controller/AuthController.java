package com.octguy.todo_app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.octguy.todo_app.dto.auth.LoginRequest;
import com.octguy.todo_app.dto.user.request.UserCreateRequest;
import com.octguy.todo_app.dto.user.response.UserResponseDto;
import com.octguy.todo_app.entity.ApiResponse;
import com.octguy.todo_app.service.AuthService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }
    
    @PostMapping("/login")
    public ResponseEntity<ApiResponse<UserResponseDto>> login(@Valid @RequestBody LoginRequest request) {
        UserResponseDto response = authService.login(request);
        ApiResponse<UserResponseDto> apiResponse = new ApiResponse<>(HttpStatus.OK, "Login successful", response, null);
        return ResponseEntity.ok(apiResponse);
    }

    @PostMapping("/register")
    public ResponseEntity<ApiResponse<UserResponseDto>> register(@Valid @RequestBody UserCreateRequest request) {
        UserResponseDto response = authService.register(request);
        ApiResponse<UserResponseDto> apiResponse = new ApiResponse<>(HttpStatus.CREATED, "User registered successfully", response, null);
        return ResponseEntity.status(HttpStatus.CREATED).body(apiResponse);
    }

}
