package com.octguy.todo_app.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.octguy.todo_app.dto.auth.LoginRequest;
import com.octguy.todo_app.dto.user.request.UserCreateRequest;
import com.octguy.todo_app.dto.user.response.UserResponseDTO;
import com.octguy.todo_app.entity.User;
import com.octguy.todo_app.mapper.UserMapper;
import com.octguy.todo_app.repository.UserRepository;
import com.octguy.todo_app.service.AuthService;

public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    public PasswordEncoder passwordEncoder;

    @Override
    public UserResponseDTO login(LoginRequest request) {
        // Find user by email
        User user = userRepository.findByEmail(request.getEmail())
                    .orElseThrow(() -> new RuntimeException("User not found"));

        // Compare raw password with hashed password
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        // Return user response DTO
        return userMapper.toResponseDTO(user);

        // Note: JWT generation logic should be added here later
    }

    @Override
    public UserResponseDTO register(UserCreateRequest request) {
        // Check existing user by email
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("User with this email already exists");
        }

        User user = userMapper.toEntity(request);
        user.setPassword(passwordEncoder.encode(user.getPassword())); // hashed password
        userRepository.save(user);

        return userMapper.toResponseDTO(user);
    }

}
