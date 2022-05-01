import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="App">
      <nav className="bg-green-400 text-white py-2  flex justify-around text-xl">
        <div className="justify-start">
          <Link className="p-3" to="/">
            Home
          </Link>
        </div>
        <div className="justify-end">
          <Link className="p-3" to="/about">
            About
          </Link>
          <Link className="p-3" to="/login">
            Login
          </Link>
          <Link className="p-3" to="/register">
            Register
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
