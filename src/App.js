import React, { Fragment } from 'react';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import { useParams, BrowserRouter } from 'react-router-dom';
import Router from './utils/Router';
import './App.scss';

/**
 * App function call router for manage the pages that will be render.
 * @function App
 *
 *  */

function App() {
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
