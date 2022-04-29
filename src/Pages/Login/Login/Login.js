import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="email" placeholder="email address" />
          <input type="password" placeholder="password" />
          <button>login</button>
          <p className="message">
            Already registered? <span onClick={() => navigate('/register')}>Create an account</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
