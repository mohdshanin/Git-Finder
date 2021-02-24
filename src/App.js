import { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get('https://api.github.com/users');
      setUsers(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Users loading={loading} users={users} />
    </div>
  );
};

export default App;
