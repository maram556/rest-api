import logo from './logo.svg';
import './App.css';

import React from 'react';
import { useSelector } from 'react-redux';
import UserList from './component/UserList';
import './App.css';

function App() {

  const userslist = useSelector(state => state.UsersList)
  return (
    <div className="App container">
    <UserList  userlist={userslist} />
    </div>
  );
}

export default App;