import React, { Fragment, useEffect, useState } from 'react';
import Loading from './pages/Loading';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { getUserData } from './api';
import './App.scss';

function App() {
  const [userData, setUserData] = useState({});
  console.log(userData);
  useEffect(() => {
    getUserData(12)
      .then((res) => setUserData(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      {userData.user ? <Dashboard data={userData} /> : <Loading />}
    </Fragment>
  );
}

export default App;
