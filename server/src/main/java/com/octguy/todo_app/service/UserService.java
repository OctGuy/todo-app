package com.octguy.todo_app.service;

import java.util.List;

import com.octguy.todo_app.dto.user.request.UserUpdateRequest;
import com.octguy.todo_app.dto.user.response.UserResponseDto;

public interface UserService {
    
    List<UserResponseDto> getAllUsers();

    UserResponseDto getUserById(Integer id);

    UserResponseDto updateUser(Integer id, UserUpdateRequest userResponseDto);


}
