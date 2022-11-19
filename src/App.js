import React, { Fragment, useEffect, useState } from 'react';
import Loading from './pages/Loading';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { getUserData } from './api';
import './App.scss';
// var count = 0;
function App() {
  // count++;
  // console.log(count);
  // const consoler = (para) => console.log(para, userData);
  const [userData, setUserData] = useState({});
  // consoler('Before userEffect');
  useEffect(() => {
    getUserData(12)
      .then((res) => setUserData(res))
      .catch((err) => console.log(err));
  }, []);

  // consoler('After userEffect');
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      {userData.userInfos ? <Dashboard data={userData} /> : <Loading />}
    </Fragment>
  );
}

export default App;
