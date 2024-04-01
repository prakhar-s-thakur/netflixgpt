import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";



const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // first we validate form
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    // sign in / sign up
    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          
        });


    }
    else {
      // sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " " + errorMessage);
  });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div className="absolute">
        <Header />
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo" />
      </div>

      <form onSubmit={(e)=> e.preventDefault()} className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-70 rounded-lg shadow-xl">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
       {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-3 my-4 w-full bg-gray-800 rounded-sm border border-gray-500"
        ></input>}
        <input
          ref={email}
          type="email"
           placeholder="Email"
          className="p-3 my-4 w-full bg-gray-800 rounded-sm border border-gray-500"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-800 rounded-sm border border-gray-500"
        ></input>
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button className="p-3 my-6 bg-red-700 w-full rounded-sm " onClick={handleButtonClick}>
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
