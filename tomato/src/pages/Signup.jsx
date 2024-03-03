import React from 'react';
import './signup.css'; 
import { Link } from 'react-router-dom';

 const Signup = () => {
  return (
    <div>
      <div className="behind-c">
        {/* Add your background content or image here */}

        {/* Front Container */}
        <div className="main-container bg-green-900">
          {/* Left Container */}
          <div className="container-1">
            <h1 className="heading">Create an Account</h1>
            <p className="sub-heading text-xl font-bold">
              Join us and start your plant journey!
            </p>
            <div className="thesignup flex gap-6" style={{ width: '80%' }}>
            <div className="flex flex-col">
               <button className="l-emailSignup mt-20 bg-blue-500 text-white py-2 px-4 rounded-md">
                  <i className="material-icons mr-2">mail</i>  Continue With Google Acc 
                </button>
              </div>

              <div className="flex flex-col">
                <button className="emailSignup mt-20 bg-blue-500 text-white py-2 px-4 rounded-md">
                  <i className="material-icons mr-2">mail</i> Sign up with Email Address
                </button>
              </div>
            </div>
          </div>

          {/* Right Container */}
          <div className="theright-container">
          <h2 className=" title-text text-xl font-semibold mt-20 mb-10" style={{ marginBottom: '20px' }}>Fresh Farm</h2>
<p className="text-gray-600 mb-6 mt-10" style={{ marginTop: '20px' }}>Create your account to get started!</p>

<form style={{ padding: '10px' }}>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 mb-2"
              />
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 mb-2"
              />
              <input
                type="password"
                placeholder="Create Password"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 mb-4"
              />
               <input
                type="password"
                placeholder="confirm Password"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 mb-4"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Sign Up
              </button>
              <p className=" textSignup">
  Already have an account? <Link to="/Auth/login" className="text-blue-500 hover:underline">Log In</Link>
</p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;