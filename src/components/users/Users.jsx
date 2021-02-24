import { useEffect, useState } from 'react';
import UserItem from './UserItem';
import axios from 'axios';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr) ',
  gridGap: '1rem',
};
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://api.github.com/users');
      setUsers(res.data);
    };
    fetchData();
  }, []);

  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} userItem={user} />
      ))}
    </div>
  );
};

export default Users;
