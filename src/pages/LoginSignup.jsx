import React, { useState } from 'react';
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ email: '', password: '', confirmPassword: '' });
  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Perform login logic, for example, send data to backend
    if (loginData.email && loginData.password) {
      // Successful login, clear form and errors
      setLoginData({ email: '', password: '' });
      setLoginError('');
    } else {
      setLoginError('Please enter email and password');
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic, for example, send data to backend
    if (signupData.email && signupData.password && signupData.password === signupData.confirmPassword) {
      // Successful signup, clear form and errors
      setSignupData({ email: '', password: '', confirmPassword: '' });
      setSignupError('');
    } else {
      setSignupError('Please enter valid email and matching passwords');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
      <p>{loginError}</p>

      <h2>Sign Up</h2>
      <form onSubmit={handleSignupSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={signupData.email}
          onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={signupData.password}
          onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={signupData.confirmPassword}
          onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>{signupError}</p>
    </div>
  );
};

export default LoginSignup;
