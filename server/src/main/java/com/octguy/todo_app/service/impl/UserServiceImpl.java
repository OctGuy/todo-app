package com.octguy.todo_app.service.impl;


import java.util.List;

import com.octguy.todo_app.dto.user.request.UserUpdateRequest;
import com.octguy.todo_app.entity.User;
import com.octguy.todo_app.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.octguy.todo_app.dto.user.response.UserResponseDto;
import com.octguy.todo_app.mapper.UserMapper;
import com.octguy.todo_app.repository.UserRepository;
import com.octguy.todo_app.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final UserMapper userMapper;

    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    @Override
    public List<UserResponseDto> getAllUsers() {
        return userRepository.findAll().stream()
                .map(userMapper::toResponseDTO)
                .toList();
    }

    @Override
    public UserResponseDto getUserById(Integer id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));

        return userMapper.toResponseDTO(user);
    }

    @Override
    public UserResponseDto updateUser(Integer id, UserUpdateRequest userResponseDto) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));

        // Update user fields
        if (userResponseDto.getUsername() != null) {
            user.setUsername(userResponseDto.getUsername());
        }

        if (userResponseDto.getEmail() != null) {
            user.setEmail(userResponseDto.getEmail());
        }

        User updatedUser = userRepository.save(user);
        return userMapper.toResponseDTO(updatedUser);
    }
}