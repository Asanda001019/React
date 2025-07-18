import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

const Register = ({ onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    department: '',
    securityQuestion: '',
    securityAnswer: '',
    twoFactorMethod: 'email'
  });

  const departments = [
    'Select Department',
    'Human Resources',
    'Information Technology',
    'Finance',
    'Marketing',
    'Operations',
    'Sales',
    'Customer Service'
  ];

  const securityQuestions = [
    'Select Security Question',
    'What was your first pet\'s name?',
    'In what city were you born?',
    'What is your mother\'s maiden name?',
    'What was the name of your first school?',
    'What is your favorite book?'
  ];

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterSubmit = () => {
    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!registerData.department || registerData.department === 'Select Department') {
      alert('Please select a department!');
      return;
    }
    if (!registerData.securityQuestion || registerData.securityQuestion === 'Select Security Question') {
      alert('Please select a security question!');
      return;
    }
    console.log('Register submitted:', registerData);
    alert('Registration form submitted! Check console for data.');
  };

  return (
    <>
      <style jsx>{`
        .auth-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
        }

        .auth-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 500px;
          position: relative;
        }

        .register-card {
          max-width: 600px;
        }

        .auth-header {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          position: relative;
        }

        .back-button {
          position: absolute;
          left: 0;
          background: none;
          border: none;
          cursor: pointer;
          color: #666;
          padding: 8px;
          border-radius: 50%;
          transition: background-color 0.3s;
        }

        .back-button:hover {
          background-color: #f0f0f0;
        }

        .auth-title {
          font-size: 28px;
          font-weight: 700;
          color: #333;
          margin: 0 auto;
          text-align: center;
          flex: 1;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-row {
          display: flex;
          gap: 15px;
        }

        .form-row .form-group {
          flex: 1;
        }

        .form-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #555;
          font-size: 14px;
        }

        .form-input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e1e5e9;
          border-radius: 12px;
          font-size: 16px;
          transition: border-color 0.3s, box-shadow 0.3s;
          background: #f8f9fa;
          box-sizing: border-box;
        }

        .form-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
          background: white;
        }

        .password-input-container {
          position: relative;
        }

        .password-toggle {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #666;
          padding: 4px;
        }

        .password-toggle:hover {
          color: #333;
        }

        .form-select {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e1e5e9;
          border-radius: 12px;
          font-size: 16px;
          transition: border-color 0.3s, box-shadow 0.3s;
          background: #f8f9fa;
          box-sizing: border-box;
          cursor: pointer;
        }

        .form-select:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
          background: white;
        }

        .radio-group {
          display: flex;
          gap: 20px;
          margin-top: 8px;
        }

        .radio-option {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .radio-input {
          width: 18px;
          height: 18px;
          accent-color: #667eea;
        }

        .radio-label {
          font-size: 14px;
          color: #555;
          cursor: pointer;
        }

        .auth-button {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 20px;
        }

        .auth-button.primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .auth-button.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }

        .auth-switch {
          text-align: center;
          margin-top: 20px;
          color: #666;
        }

        .switch-link {
          background: none;
          border: none;
          color: #667eea;
          cursor: pointer;
          font-weight: 600;
          text-decoration: underline;
        }

        .switch-link:hover {
          color: #764ba2;
        }

        @media (max-width: 640px) {
          .auth-card {
            padding: 30px 20px;
          }
          
          .form-row {
            flex-direction: column;
            gap: 0;
          }
          
          .radio-group {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
      
      <div className="auth-container">
        <div className="auth-card register-card">
          <div className="auth-header">
            <button
              onClick={onSwitchToLogin}
              className="back-button"
            >
              <ArrowLeft size={20} />
            </button>
            <h2 className="auth-title">Register</h2>
          </div>
          
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={registerData.fullName}
              onChange={handleRegisterChange}
              className="form-input"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                className="form-input"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                name="phone"
                value={registerData.phone}
                onChange={handleRegisterChange}
                className="form-input"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Department</label>
            <select
              name="department"
              value={registerData.department}
              onChange={handleRegisterChange}
              className="form-select"
              required
            >
              {departments.map((dept, index) => (
                <option key={index} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  className="form-input"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <div className="password-input-container">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={registerData.confirmPassword}
                  onChange={handleRegisterChange}
                  className="form-input"
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="password-toggle"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Security Question</label>
            <select
              name="securityQuestion"
              value={registerData.securityQuestion}
              onChange={handleRegisterChange}
              className="form-select"
              required
            >
              {securityQuestions.map((question, index) => (
                <option key={index} value={question}>
                  {question}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Security Answer</label>
            <input
              type="text"
              name="securityAnswer"
              value={registerData.securityAnswer}
              onChange={handleRegisterChange}
              className="form-input"
              placeholder="Enter your security answer"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Two-Factor Authentication Method</label>
            <div className="radio-group">
              <div className="radio-option">
                <input
                  type="radio"
                  id="email-2fa"
                  name="twoFactorMethod"
                  value="email"
                  checked={registerData.twoFactorMethod === 'email'}
                  onChange={handleRegisterChange}
                  className="radio-input"
                />
                <label htmlFor="email-2fa" className="radio-label">Email</label>
              </div>
              <div className="radio-option">
                <input
                  type="radio"
                  id="sms-2fa"
                  name="twoFactorMethod"
                  value="sms"
                  checked={registerData.twoFactorMethod === 'sms'}
                  onChange={handleRegisterChange}
                  className="radio-input"
                />
                <label htmlFor="sms-2fa" className="radio-label">SMS</label>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleRegisterSubmit}
            className="auth-button primary"
          >
            Register
          </button>
          
          <div className="auth-switch">
            <span>Already have an account? </span>
            <button
              onClick={onSwitchToLogin}
              className="switch-link"
            >
              Login here
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;