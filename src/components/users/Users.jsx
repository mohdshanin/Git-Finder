import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr) ',
  gridGap: '1rem',
};
const Users = ({ users, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} userItem={user} />
      ))}
    </div>
  );
};

export default Users;
