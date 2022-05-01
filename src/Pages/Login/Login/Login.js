import React from 'react';
// import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-page w-80 mx-auto mt-20">
      <div className="form bg-green-100 py-5 rounded-md shadow-lg">
        <form className="login-form py-10">
          <input className="bg-slate-200 p-2 mb-4 outline-none rounded" type="email" placeholder="Email address" />
          <br />
          <input className="bg-slate-200 p-2 mb-4 outline-none rounded" type="password" placeholder="Password" />
          <br />
          <button className="bg-green-400 py-2 px-6 mb-4 rounded-md">Login</button>
          <p className="message">
            Don't Have an Account?{' '}
            <span className="cursor-pointer text-green-400 font-semibold" onClick={() => navigate('/register')}>
              Create One
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
