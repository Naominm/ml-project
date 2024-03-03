  import React from 'react';
  import './login.css';
  import { Link } from 'react-router-dom';

  export const Login = () => {
    return (
      <div>
        <div className="behind-container">
          {/* Add your background content or image here */}

          {/* Front Container */}
          <div className="container ">
            {/* Left Container */}
            <div className="left-container">
              <h1 className="heading">Welcome Back!</h1>
              <p className="login-sub-heading">
                We source the healthiest and most <br />
                beautiful plants to bring 'nature' into <br />
                your home. We provide expert care
                <br /> advice to ensure your plants thrive.
              </p>
              <div className="loginContainer flex gap-6 " style={{ width: '80%' }}>
                <button className=" googleLogin mt-20 bg-green-500 text-white py-2 px-4 rounded-md">
                  <i className=" material-icons mr-2">account_circle</i> Log in with Google
                </button>

                <div className="flex flex-col">
                  <button className=" emailLogin mt-20 bg-green-500 text-white py-2 px-4 rounded-md ">
                  <i className="material-icons mr-2">mail</i>  Log in with Email Address
                  
                  </button>
                </div>
              </div>
            </div>

            {/* Right Container */}
            <div className="right-container bg-white">
              <h2 className=" openingText ">Fresh Farm</h2>
              <p className="subtext ">Please Enter Your Login Details</p>
              <form>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full p-2 border rounded-md focus:ring focus:ring-green-300 mb-2"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full p-2 border rounded-md focus:ring focus:ring-green-300 mb-4"
                />
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                >
                  Login
                </button>
                <p className="textLogin">
    Don't have an account? <Link to="/Auth/signup" className="text-green-500 hover:underline">Register</Link>
  </p>


              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Login;
