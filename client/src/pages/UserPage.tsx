import { useEffect, useState } from 'react'
import type { User } from '../api/userApi'
import userApi from '../api/userApi';

const UserPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  
  const fetchUsers = async () => {
    const res = await userApi.getAllUsers();
    console.log(res.data);

    if (res?.data?.status === 'success') {
      setUsers(res.data.data);
      console.log(users);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>UserPage</div>
  )
}

export default UserPage