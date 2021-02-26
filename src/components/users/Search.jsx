import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, clearUsers, showClear, Alert }) => {
  const [text, setText] = useState('');

  const Change = (e) => setText(e.target.value);

  const Add = (e) => {
    text === '' ? Add('') : e.preventDefault();
    searchUsers({});
    setText('');
  };
  const Submit = (e) => {
    e.preventDefault();
    !text
      ? Alert('Please Enter Some Text To Search', 'dark')
      : searchUsers({ text });
    setText(text);
  };
  // Clear Users From State
  clearUsers = () => {
    searchUsers('');
    setText('');
  };
  return (
    <>
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
      {showClear && (
        <form onSubmit={Add}>
          <button
            className="btn btn-danger btn-block"
            onClick={clearUsers}
            style={{ margin: '1rem auto' }}
          >
            Clear
          </button>
        </form>
      )}
    </>
  );
};

Search.prototype = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  Alert: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
};

export default Search;
