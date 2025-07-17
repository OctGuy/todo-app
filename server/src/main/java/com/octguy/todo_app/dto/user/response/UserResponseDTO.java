package com.octguy.todo_app.dto.user.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDTO {

    private Integer userId;
    private String username;
    private String email;
}
