package com.octguy.todo_app.service.impl;


import org.springframework.stereotype.Service;
import com.octguy.todo_app.dto.user.response.UserResponseDTO;
import com.octguy.todo_app.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Override
    public UserResponseDTO getUserById(Integer userId) {
        return null;
    }

}
