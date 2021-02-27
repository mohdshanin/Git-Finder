import PropTypes from 'prop-types';

const RepoItem = ({ repoItem }) => {
  return (
    <div className="card">
      <h3>
        <a href={repoItem.html_url}>{repoItem.name} </a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repoItem: PropTypes.object.isRequired,
};
export default RepoItem;
