// LoginComponent.js
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import {Link} from 'react-router-dom';

const Login = ({ onSwitchToRegister, onSwitchToReset }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    emailOrUsername: '',
    password: ''
  });

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = () => {
    console.log('Login submitted:', loginData);
    alert('Login form submitted! Check console for data.');
  };

  return (
    <>
      <style jsx>{`
        /* Add all the CSS styles here - same as before */
        .auth-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
        }
        /* ... rest of the styles ... */
      `}</style>
      
      <div className="auth-container">
        <div className="auth-card">
          <h2 className="auth-title">Login</h2>
          
          <div className="form-group">
            <input
              type="text"
              name="emailOrUsername"
              placeholder="Email or Username"
              value={loginData.emailOrUsername}
              onChange={handleLoginChange}
              className="auth-input"
            />
          </div>
          
          <div className="form-group password-group">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              className="auth-input"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          
       <Link to="/reset" className="forgot-password-link">
  Forgot Password?
</Link>
          
          <button
            onClick={handleLoginSubmit}
            className="auth-button primary"
          >
            Submit
          </button>
          
          <div className="auth-switch">
            <span>Don't have an account? </span>
            <button
              onClick={onSwitchToRegister}
              className="switch-link"
            >
              Register here
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login
