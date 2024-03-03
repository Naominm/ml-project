import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const AuthPage = () => {
  return (
    <div>
      <div>
        <Link to="/auth/login" className="active">
          Login
        </Link>
        <Link to="/auth/signup" className="active">
          Signup
        </Link>
      </div>

      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default AuthPage;
