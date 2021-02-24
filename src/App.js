import { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Spinner from './components/layout/Spinner';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return this.state.loading ? (
      <Spinner />
    ) : (
      <div className="App">
        <Navbar />
        <Users />
      </div>
    );
  }
}
// render() {
//   if (this.state.loading) {
//     return <Spinner />;
//   } else {
//     return (
//       <div className="App">
//         <Navbar />
//         <Users />
//       </div>
//     );
//   }
// }
export default App;
