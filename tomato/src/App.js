import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/auth/login" />} />
        <Route path="/auth/*" element={<AuthPage />} />
      </Routes>
    </Router>
  );
};

export default App;
