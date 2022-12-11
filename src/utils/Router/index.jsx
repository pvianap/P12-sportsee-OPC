import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
// import Profile from '../../pages/Profile';
// import Settings from '../../pages/Settings';
import NotFound from '../../pages/NotFound';

/**
 * @component Routing all pages
 * Dashboard, profile, settings, community
 */

export default function Router() {
  console.log('Router was called');
  return (
    <Routes>
      {/* Route adaptation for github pages */}
      {/* <Route
        exact
        path="/P12-sportsee-OPC/"
        element={<Navigate replace to="/dashboard/12" />}
      /> */}
      <Route exact path="/" element={<Navigate replace to="/dashboard/12" />} />
      {/* <Route path="/home" element={<Dashboard />} /> */}
      {/* <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} /> */}
      <Route path="/dashboard/:id" element={<Dashboard />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
