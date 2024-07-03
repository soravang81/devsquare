import React from "react";
import './App.css';
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Authentication } from "./components/LoginSignup";
import { RecoilRoot } from 'recoil';
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import ProtectedRoute from './components/ProtectedRoute';

const store = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: false,
});

function AppWrapper() {
  return (
    <RecoilRoot>
      <AuthProvider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </RecoilRoot>
  );
}

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/';
  const isAuth = useIsAuthenticated();
  const authHeader = useAuthHeader();

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path='/login' element={<Authentication />} />
        <Route element={<ProtectedRoute fallbackPath='/login' />}>
          <Route path='/' element={isAuth ? <Navigate to='/dashboard' /> : <Navigate to='/login' />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppWrapper;
