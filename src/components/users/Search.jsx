import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  // const { searchUsers } = githubContext;
  // const { setAlert } = alertContext;

  const [text, setText] = useState('');

  const Change = (e) => setText(e.target.value);

  const Submit = (e) => {
    e.preventDefault();
    !text
      ? alertContext.setAlert('Please Enter Some Text To Search', 'dark')
      : githubContext.searchUsers({ text });
    setText('');
  };

  return (
    <div>
      <form onSubmit={Submit} className="form  form-block">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={Change}
          style={{ width: '90%', margin: '1rem auto' }}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark  btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          onClick={githubContext.clearUsers}
          className="btn btn-danger btn-block"
          style={{ margin: '1rem auto' }}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
