import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-gray-800 w-full py-3 text-white">
      <p>&copy; Created By Md. Rejaur Rahman {new Date().getFullYear()}</p>
      <p></p>
    </footer>
  );
};

export default Footer;
