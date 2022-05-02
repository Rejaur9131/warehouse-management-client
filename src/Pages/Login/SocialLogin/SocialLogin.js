import React from 'react';
import google from '../../../images/google.png';
import auth from './../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div>
      <div className="flex align-middle mb-4">
        <div className="bg-slate-400 w-36 h-0.5 "></div>
        <p className="px-6 -m-3 font-semibold">Or</p>
        <div className="bg-slate-400 w-36 h-0.5"></div>
      </div>
      <div>
        <button onClick={() => signInWithGoogle()} className="bg-gray-800 text-white py-2 px-6 mb-4 rounded-md flex mx-auto">
          <img style={{ width: '30px' }} src={google} alt="" />
          <span className="px-3">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
