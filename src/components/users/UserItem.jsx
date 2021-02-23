import PropTypes from 'prop-types';

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
      <a href={userHtmlUrl} className="btn btn-dark btn-sm my-1">
        More
      </a>
    </div>
  );
};

UserItem.propTypes = {
  userItem: PropTypes.object.isRequired,
};

export default UserItem;
