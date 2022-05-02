import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Register.css';
import auth from './../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

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
    <div className=" login-page w-80 mx-auto mt-10 ">
      <div className="form bg-green-100 py-5 rounded-md shadow-lg ">
        <form onSubmit={handleSubmit} className="register-form py-10">
          <input className="bg-slate-200 p-2 mb-4 outline-none rounded" type="text" placeholder="Name" />
          <br />
          <input className="bg-slate-200 p-2 mb-4 outline-none rounded" type="email" ref={emailRef} placeholder="Email address" />
          <br />
          <input className="bg-slate-200 p-2 mb-4 outline-none rounded" type="password" ref={passwordRef} placeholder="Password" />
          <br />
          <button className="bg-green-400 py-2 px-6 mb-4 rounded-md">Register</button>
          <p className="message">
            Already registered?{' '}
            <span className="cursor-pointer text-green-400 font-semibold" onClick={() => navigate('/login')}>
              Sign In
            </span>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
