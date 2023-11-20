import React from 'react';
import Navbar from './componets/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './componets/pages/Home';
import Login from './componets/pages/Login';
import Register from './componets/pages/Register';
import Dashboard from './componets/pages/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Login' Component={Login} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
