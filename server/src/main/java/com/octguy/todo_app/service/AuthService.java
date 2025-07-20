package com.octguy.todo_app.service;

import com.octguy.todo_app.dto.auth.LoginRequest;
import com.octguy.todo_app.dto.user.request.UserCreateRequest;
import com.octguy.todo_app.dto.user.response.UserResponseDto;

public interface AuthService {

    UserResponseDto login(LoginRequest request); // should be return AuthResponseDTO later on -> JWT

    UserResponseDto register(UserCreateRequest request);

}
