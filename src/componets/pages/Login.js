// Import the necessary components from React and React Router
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../../App.css';
import '../Login.css';

const Login = () => {
  // Use the useNavigate hook to get the navigation function
  const navigate = useNavigate();

  // Define handleLoginClick within the scope of the Login component
  const handleLoginClick = () => {
    // Assuming '/dashboard' is the path to your dashboard component
    navigate('/dashboard'); // Use navigate to navigate to the dashboard
  };

  // Define handleRegisterClick within the scope of the Login component
  const handleRegisterClick = () => {
    // Use navigate to navigate to the register page
    navigate('/register');
  };

  return (
    <div className='input-div'>
      <div className='input-form'>
        <h1>Login Account</h1>
        <form action="" className='login-form'>
          <div className='mb-3'>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter Email' className='form-email'/>
          </div>
          <div className='mb-3'>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter Password' className='form-password'/>
          </div>
          <button className='butn' onClick={handleLoginClick}>Log in</button>
          {/* Use Link component for navigation */}
          <p className='p-button'>
            Don't have an Account?{' '}
            <Link to="/register" onClick={handleRegisterClick}>Register now.</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
