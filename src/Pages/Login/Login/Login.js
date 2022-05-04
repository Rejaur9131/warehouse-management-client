import axios from 'axios';
import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from './../../../firebase.init';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation;
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  let from = location.state?.from?.pathname || '/';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post('http://localhost:5000/login', { email });
    localStorage.setItem('accessToken', data.accessToken);
    navigate(from, { replace: true });
  };

  if (user) {
    // navigate(from, { replace: true });
  }

  return (
    <div className="login-page w-80 mx-auto mt-6">
      <div className="form bg-gray-200 py-4 rounded-md shadow-lg mx-5 mb-12">
        <form onSubmit={handleSubmit} className="login-form py-4">
          <input className="bg-slate-300 p-2 mb-4 outline-none rounded" type="email" ref={emailRef} placeholder="Email address" />
          <br />
          <input className="bg-slate-300 p-2 mb-4 outline-none rounded" type="password" ref={passwordRef} placeholder="Password" />
          <br />
          <button className="bg-gray-800 text-white py-2 px-6 mb-4 rounded-md" type="submit">
            Login
          </button>
          <p className="message">
            Don't Have an Account?{' '}
            <span className="cursor-pointer text-gray-800 font-semibold" onClick={() => navigate('/register')}>
              Create One
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
