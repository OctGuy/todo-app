import axiosClient from "./axiosClient";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface UserResponseDto {
  id: string;
  username: string;
  email: string;
}

export interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
  errorCode: string | null;
}

const authApi = {
  login: (data: LoginRequest) => {
    return axiosClient.post<ApiResponse<UserResponseDto>>('/auth/login', data);
  },
  register: (data: RegisterRequest) => {
    return axiosClient.post<ApiResponse<UserResponseDto>>('/auth/register', data);
  }
};

export default authApi;