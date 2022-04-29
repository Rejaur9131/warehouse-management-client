import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './Register.css';
import auth from './../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
  };

  const navigate = useNavigate();
  return (
    <div className="login-page">
      <div className="form">
        <form onSubmit={handleSubmit} className="register-form">
          <input type="text" placeholder="name" />
          <input type="email" ref={emailRef} placeholder="email address" />
          <input type="password" ref={passwordRef} placeholder="password" />
          <button>Register</button>
          <p className="message">
            Already registered? <span onClick={() => navigate('/login')}>Sign In</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
