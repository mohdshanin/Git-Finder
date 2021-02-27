import { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getRepos(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      company,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading, repos } = this.props;
    return (
      <>
        {loading && <Spinner />}
        <Link to="/" className="btn btn-dark">
          Back To Search
        </Link>
        Hireable:{''}
        {hireable ? (
          <i className="fas fa-check text-succes" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt=""
              style={{ width: '150px' }}
            />
            <h2>{name} </h2>
            <p>Location: {location} </p>
          </div>
          <div>
            {bio && (
              <>
                <h3>Bio:</h3>
                <p>{bio} </p>
              </>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <>
                    <strong>Username:</strong> {login}
                  </>
                )}
              </li>
              <li>
                {company && (
                  <>
                    <strong>Company:</strong> {company}
                  </>
                )}
              </li>
              <li>
                {blog && (
                  <>
                    <strong>Website:</strong> {blog}
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center ">
          <div className="badge badge-success"> Followers: {followers} </div>
          <div className="badge badge-light"> Following: {following} </div>
          <div className="badge badge-dark"> Public Repos: {public_repos} </div>
          <div className="badge badge-danger">
            Public Gists : {public_gists}
          </div>
        </div>
        <Repos repos={repos} />
      </>
    );
  }
}

User.propTypes = {
  loading: PropTypes.bool,
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.object.isRequired,
};

export default User;
