import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({
  userItem: { avatar_url: userAvatarUrl, html_url: userHtmlUrl, login },
}) => {
  // const { avatar_url, html_url, login } = userItem || {};
  return (
    <div className="card text-center">
      <img
        src={userAvatarUrl}
        alt=""
        className="round-img"
        style={{ width: '60px' }}
      />
      <h3>{login} </h3>
      <Link to={`user/${login}`} className="btn btn-dark btn-sm my-1">
        More
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  userItem: PropTypes.object.isRequired,
};

export default UserItem;
