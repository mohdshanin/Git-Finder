import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';
import axios from 'axios';

const App = () => {
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://api.github.com/users');
      setUserdata(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Users users={userdata} />
    </div>
  );
};

export default App;
