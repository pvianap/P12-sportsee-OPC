import React, { Fragment, useEffect, useState } from 'react';
import Loading from './pages/Loading';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { getUserData } from './utils/api';
import { useParams, BrowserRouter } from 'react-router-dom';
import Router from './utils/Router';
import './App.scss';

function App() {
  // const [userData, setUserData] = useState({});
  console.log('Params: ', useParams());
  // useEffect(() => {
  //   getUserData(18)
  //     .then((res) => setUserData(res))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      {/* {userData.user ? <Dashboard data={userData} /> : <Loading />} */}
    </Fragment>
  );
}

export default App;

// (
//   <Fragment>
//     <Navbar />
//     <Sidebar />
//     {userData.user ? <Dashboard data={userData} /> : <Loading />}
//   </Fragment>
// );
