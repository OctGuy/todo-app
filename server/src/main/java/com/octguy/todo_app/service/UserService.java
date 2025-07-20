package com.octguy.todo_app.service;

import java.util.List;

import com.octguy.todo_app.dto.user.response.UserResponseDTO;

public interface UserService {
    
    List<UserResponseDTO> getAllUsers();
}
