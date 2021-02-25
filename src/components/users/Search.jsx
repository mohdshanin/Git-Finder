import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, clearUsers }) => {
  const [text, setText] = useState('');

  const Change = (e) => setText(e.target.value);

  const Submit = (e) => {
    !text ? Submit('') : e.preventDefault();
    searchUsers({ text });
    setText(text);
  };
  // Clear Users From State
  clearUsers = () => {
    searchUsers(null);
    setText('');
  };
  return (
    <form onSubmit={Submit} className="form  form-block">
      <input
        type="text"
        name="text"
        placeholder="Search Users..."
        value={text}
        onChange={Change}
        style={{ width: '90%', margin: '1rem auto' }}
      />
      <input type="submit" value="Search" className="btn btn-dark  btn-block" />
      <button
        className="btn btn-danger btn-block"
        onClick={clearUsers}
        style={{ margin: '1rem auto' }}
      >
        Clear
      </button>
    </form>
  );
};

Search.prototype = {
  searchUsers: PropTypes.func.isRequired,
};

export default Search;
