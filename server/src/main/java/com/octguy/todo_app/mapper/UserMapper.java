package com.octguy.todo_app.mapper;

import org.springframework.stereotype.Component;

import com.octguy.todo_app.dto.user.request.UserCreateRequest;
import com.octguy.todo_app.dto.user.response.UserResponseDto;
import com.octguy.todo_app.entity.User;

@Component
public class UserMapper {
    public UserResponseDto toResponseDTO(User user) {
        if (user == null) {
            return null;
        }
        
        UserResponseDto responseDTO = new UserResponseDto();
        responseDTO.setUserId(user.getId());
        responseDTO.setUsername(user.getUsername());
        responseDTO.setEmail(user.getEmail());
        
        return responseDTO;
    }

    public User toEntity(UserCreateRequest request) {
        if (request == null) {
            return null;
        }
        
        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(request.getPassword()); // Password should be encoded before saving
        user.setEmail(request.getEmail());
        
        return user;
    }
}
