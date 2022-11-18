import React, { Fragment, useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { getUserData } from './api';
import './App.scss';

function App() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getUserData(12)
      .then((res) => setUserData(res))
      .catch((err) => console.log(err));
  }, []);
  if (!userData) return null;
  console.log(userData);
  if (!userData) return null;
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <Dashboard data={userData} />
    </Fragment>
  );
}

export default App;
