import React, { lazy, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { themeChange } from 'theme-change'

import initializeApp from './app/init';
import ForgotPasswordOTP from './features/user/ForgotOtp';
import ResetPassword from './features/user/ResetPassword';
import Address from './features/user/Address';
import Dashboard from './features/dashboard';

// Importing pages
const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Register = lazy(() => import('./pages/Register'))


// Initializing different libraries
initializeApp()


// Check for login and initialize axios
// const token = checkAuth()


function App() {

  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false)
  }, [])


  return (
    <>
      <Router>
        <Routes>
        
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/Verify-otp" element={<ForgotPasswordOTP />} />
          <Route path="/reset-password" element={<ResetPassword/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/address" element={<Address/>}/>
          {/* Place new routes over this */}
          <Route path="/app/*" element={<Layout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="*" element={<Navigate to={token ? "/app/welcome" : "/login"} replace />}/> */}

        </Routes>
      </Router>
    </>
  )
}

export default App
