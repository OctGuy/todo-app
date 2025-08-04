import axiosClient from "./axiosClient";
import type { ApiResponse } from "./authApi";

export interface User {
  id: number;
  username: string;
  email: string;
}

const userApi = {
  getAllUsers: () => {
    return axiosClient.get<ApiResponse<User[]>>('/users');
  }
};

export default userApi;