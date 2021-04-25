import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import heroImg from '../../asset/images/home-phones.png';
import logoImg from '../../asset/images/logo.png';

const Login = () => {
  const history = useHistory();

  useEffect(() => {
    document.title = 'Login • Instagram';
  }, []);

  return (
    <div className="flex justify-center h-screen sm:items-center sm:px-10">
      <img
        className="hidden mr-5 w-80 md:block"
        src={heroImg}
        alt="Phones with Instagram"
      />

      <div className="flex flex-col flex-none w-full max-w-sm px-10 py-6 sm:border sm:bg-white">
        <h1 className="mx-auto mb-6">
          <img src={logoImg} alt="Instagram" />
        </h1>

        <form className="flex flex-col gap-2">
          <input
            aria-label="Email address"
            aria-required="true"
            autoCapitalize="off"
            autoCorrect="off"
            type="text"
            placeholder="Email address"
            className="p-2 border rounded-sm bg-gray-50"
          />
          <input
            aria-label="Password"
            aria-required="true"
            autoCapitalize="off"
            autoCorrect="off"
            type="password"
            placeholder="Password"
            className="p-2 border rounded-sm bg-gray-50"
          />
          <button className="py-1 mt-2 font-bold text-white bg-indigo-300 rounded-sm">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
