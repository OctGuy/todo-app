package com.octguy.todo_app.service;

import com.octguy.todo_app.dto.auth.LoginRequest;
import com.octguy.todo_app.dto.user.request.UserCreateRequest;
import com.octguy.todo_app.dto.user.response.UserResponseDTO;

public interface AuthService {

    UserResponseDTO login(LoginRequest request); // should be return AuthResponseDTO later on -> JWT

    UserResponseDTO register(UserCreateRequest request);

}
