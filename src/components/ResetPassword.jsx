// ResetPasswordComponent.js
import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

const Reset = ({ onSwitchToLogin }) => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [resetData, setResetData] = useState({
    emailOrPhone: '',
    newPassword: ''
  });

  const handleResetChange = (e) => {
    setResetData({
      ...resetData,
      [e.target.name]: e.target.value
    });
  };

  const handleResetSubmit = () => {
    console.log('Reset password submitted:', resetData);
    alert('Password reset form submitted! Check console for data.');
  };

  return (
    <>
      <style jsx>{`
        /* Add all the CSS styles here - same as before */
      `}</style>
      
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <button
              onClick={onSwitchToLogin}
              className="back-button"
            >
              <ArrowLeft size={20} />
            </button>
            <h2 className="auth-title">Reset Password</h2>
          </div>
          
          <div className="form-group">
            <input
              type="text"
              name="emailOrPhone"
              placeholder="Email or Phone Number"
              value={resetData.emailOrPhone}
              onChange={handleResetChange}
              className="auth-input"
            />
          </div>
          
          <div className="form-group password-group">
            <input
              type={showNewPassword ? 'text' : 'password'}
              name="newPassword"
              placeholder="New Password"
              value={resetData.newPassword}
              onChange={handleResetChange}
              className="auth-input"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="password-toggle"
            >
              {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          
          <button
            onClick={handleResetSubmit}
            className="auth-button primary"
          >
            Reset Password
          </button>
          
          <div className="auth-switch">
            <span>Remember your password? </span>
            <button
              onClick={onSwitchToLogin}
              className="switch-link"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reset




