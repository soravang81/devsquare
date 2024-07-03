import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';

const ProtectedRoute = ({ fallbackPath }) => {
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? <Outlet /> : <Navigate to={fallbackPath} />;
};

export default ProtectedRoute;
