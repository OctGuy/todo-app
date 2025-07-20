package com.octguy.todo_app.controller;

import com.octguy.todo_app.dto.user.request.UserUpdateRequest;
import com.octguy.todo_app.dto.user.response.UserResponseDto;
import com.octguy.todo_app.entity.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.octguy.todo_app.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("")
    public ResponseEntity<ApiResponse<List<UserResponseDto>>> getAllUsers() {
        List<UserResponseDto> users = userService.getAllUsers();
        ApiResponse<List<UserResponseDto>> apiResponse = new ApiResponse<>(HttpStatus.OK, "Users retrieved successfully", users, null);
        return ResponseEntity.ok(apiResponse);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<UserResponseDto>> getUserById(@PathVariable Integer id) {
        UserResponseDto user = userService.getUserById(id);
        ApiResponse<UserResponseDto> apiResponse = new ApiResponse<>(HttpStatus.OK, "User retrieved successfully", user, null);
        return ResponseEntity.ok(apiResponse);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<UserResponseDto>> updateUser(@PathVariable Integer id, @Valid @RequestBody UserUpdateRequest userUpdateRequest) {
        UserResponseDto updatedUser = userService.updateUser(id, userUpdateRequest);
        ApiResponse<UserResponseDto> apiResponse = new ApiResponse<>(HttpStatus.OK, "User updated successfully", updatedUser, null);
        return ResponseEntity.ok(apiResponse);
    }
}
