// import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import ShowAlert from './components/layout/ShowAlert';
import Users from './components/users/Users';
import Search from './components/users/Search';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const res = await axios.get(
  //       `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );
  //     setUsers(res.data);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  // Search GitHub Users
  const searchUsers = async ({ text }) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  // Set Alert
  const Alert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <div className="App">
      <Navbar />
      <ShowAlert alert={alert} />
      <Search
        searchUsers={searchUsers}
        showClear={users.length > 0 ? true : false}
        Alert={Alert}
      />
      <Users loading={loading} users={users} />
    </div>
  );
};

export default App;
