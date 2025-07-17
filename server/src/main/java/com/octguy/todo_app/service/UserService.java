package com.octguy.todo_app.service;

import com.octguy.todo_app.dto.user.response.UserResponseDTO;

public interface UserService {
    
    UserResponseDTO getUserById(Integer userId);

}
