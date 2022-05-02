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
    <div className="w-80 mx-auto mt-4 -mb-6">
      <div className="form bg-gray-200 py-5 rounded-md shadow-lg mx-5 mb-24 ">
        <form onSubmit={handleSubmit} className="py-5">
          <input className="bg-slate-300 p-2 mb-3 outline-none rounded" type="text" placeholder="Name" />
          <br />
          <input className="bg-slate-300 p-2 mb-3 outline-none rounded" type="email" ref={emailRef} placeholder="Email address" />
          <br />
          <input className="bg-slate-300 p-2 mb-3 outline-none rounded" type="password" ref={passwordRef} placeholder="Password" />
          <br />
          <button className="bg-gray-800 text-white py-2 px-6 mb-3 rounded-md">Register</button>
          <p className="mb-2">
            Already registered?{' '}
            <span className="cursor-pointer text-gray-800 font-semibold" onClick={() => navigate('/login')}>
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
