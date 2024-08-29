import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Dashboard from 'views/Dashboard';
// import Dashboard from 'views/Dashboard';

// Example of PrivateRoute component
const PrivateRoute = ({ element: dashboard, ...rest }) => {
  const isAuthenticated = !!sessionStorage.getItem("User"); // Check if user is authenticated

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Dashboard {...rest} /> : <Navigate to="/login" replace />}
    />
  );
};

export default PrivateRoute;
