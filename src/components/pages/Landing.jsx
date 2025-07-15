import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome to The Tracker system</h1>
      
      
      <div style={{ marginTop: '40px' }}>
        <Link to="/register">
          <button style={{ marginRight: '20px', padding: '10px 20px' }}>
            Register
          </button>
        </Link>

        <Link to="/login">
          <button style={{ padding: '10px 20px' }}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
