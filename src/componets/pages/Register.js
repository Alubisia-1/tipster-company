import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './Register.css';

function Register() {
  return (
    <div className='input-div'>
    <div className='input-form'>
      <h1>Create Account</h1>
      <form action="" className='login-form'>
      <div className='mb-1'>
        <div className='p-pn1'>
        <label htmlFor="username">First Name</label>
          <input type="username" placeholder='Enter Username' className='form-username'/>
        </div>
        <div className='p-pn2'>
        <label htmlFor="username">Last Name</label>
          <input type="username" placeholder='Enter Username' className='form-username'/>
        </div>
        </div>
        <div className='mb-2'>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Enter Email' className='form-email'/>
        </div>
        <div className='mb-3'>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter Password' className='form-password'/>
        </div>
        <button className='butn'>Register</button>
        {/* Use Link component for navigation */}
      </form>
    </div>
  </div>
  );
}

export default Register;
