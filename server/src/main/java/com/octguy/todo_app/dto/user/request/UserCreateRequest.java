package com.octguy.todo_app.dto.user.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserCreateRequest {

    private String username;
    private String email;
    private String password;
}
