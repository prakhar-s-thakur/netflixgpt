import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div className="absolute">
        <Header />
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>

      <form className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-70 rounded-lg shadow-xl">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
       {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-3 my-4 w-full bg-gray-800 rounded-sm border border-gray-500"
        ></input>}
        <input
          type="text"
          placeholder="Email"
          className="p-3 my-4 w-full bg-gray-800 rounded-sm border border-gray-500"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-800 rounded-sm border border-gray-500"
        ></input>
        <button className="p-3 my-6 bg-red-700 w-full rounded-sm ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix ? Sign Up Now" : "Already a member? Sign in instead."}
          
        </p>
      </form>
    </div>
  );
};

export default Login;
