import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoItem key={repo.id} repoItem={repo} />);
};
Repos.propTypes = {
  repos: PropTypes.object.isRequired,
};

export default Repos;
