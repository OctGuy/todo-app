package com.octguy.todo_app.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.octguy.todo_app.dto.user.response.UserResponseDTO;
import com.octguy.todo_app.mapper.UserMapper;
import com.octguy.todo_app.repository.UserRepository;
import com.octguy.todo_app.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    @Override
    public List<UserResponseDTO> getAllUsers() {
        return userRepository.findAll().stream()
                .map(userMapper::toResponseDTO)
                .toList();
    }
}
