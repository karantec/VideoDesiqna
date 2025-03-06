import React, { lazy, useEffect, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { themeChange } from "theme-change";

import initializeApp from "./app/init";
import ForgotPasswordOTP from "./features/user/ForgotOtp";
import ResetPassword from "./features/user/ResetPassword";
import Address from "./features/user/Address";

import ProtectedRoute from "./PrivateRoutes";

// Importing pages
const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Register = lazy(() => import("./pages/Register"));

initializeApp();

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          
          <Route path="/" element={<Login />} />

          {/* Protect dashboard and app routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/app/*" element={<Layout />} />
            
          </Route>

          {/* Redirect all unknown routes to Login */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
