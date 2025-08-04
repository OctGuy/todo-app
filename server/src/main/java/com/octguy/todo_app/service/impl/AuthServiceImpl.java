package com.octguy.todo_app.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.octguy.todo_app.dto.auth.LoginRequest;
import com.octguy.todo_app.dto.user.request.UserCreateRequest;
import com.octguy.todo_app.dto.user.response.UserResponseDto;
import com.octguy.todo_app.entity.User;
import com.octguy.todo_app.exception.BadRequestException;
import com.octguy.todo_app.mapper.UserMapper;
import com.octguy.todo_app.repository.UserRepository;
import com.octguy.todo_app.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthServiceImpl(UserRepository userRepository, UserMapper userMapper, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
    }
    
    @Override
    public UserResponseDto login(LoginRequest request) {
        // Find user by email
        User user = userRepository.findByEmail(request.getEmail())
                    .orElseThrow(() -> new BadCredentialsException("Invalid credentials"));

        // Compare raw password with hashed password
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new BadCredentialsException("Invalid credentials");
        }

        // Return user response DTO
        return userMapper.toResponseDTO(user);

        // Note: JWT generation logic should be added here later
    }

    @Override
    public UserResponseDto register(UserCreateRequest request) {
        // Check existing user by email
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new BadRequestException("User with this email already exists");
        }

        User user = userMapper.toEntity(request);
        user.setPassword(passwordEncoder.encode(user.getPassword())); // hashed password
        userRepository.save(user);

        return userMapper.toResponseDTO(user);
    }

}
