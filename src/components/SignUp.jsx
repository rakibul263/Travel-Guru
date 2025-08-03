import React, { use } from "react";
import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
  const { googleSignUp } = use(AuthContext);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;

  //   createUser(email, password)
  //     .then((result) => {
  //       const user = result.user;
  //       setUser(user);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };
  const handleGoogle = () => {
      googleSignUp()
      .then(result => {
        const user = result.user;
        setUser(user);
      })
      .catch(error=> {
        toast.error(error.message);
      })
    };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="w-full max-w-md border border-gray-200 rounded-md p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <form>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full border-b border-gray-300 outline-none py-2"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full border-b border-gray-300 outline-none py-2"
              required
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center mb-6 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="checkbox checkbox-sm" />
              Remember Me
            </label>
            <Link to="#" className="text-orange-500 hover:underline">
              Forgot Password
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 font-semibold rounded-sm"
          >
            Login
          </button>

          {/* Signup link */}
          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link
              to="/login/register"
              className="text-orange-500 hover:underline"
            >
              Create an account
            </Link>
          </p>
        </form>
      </div>

      {/* OR divider */}
      <div className="flex items-center w-full max-w-md my-6">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="px-4 text-gray-500 text-sm">Or</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

        <button className="flex items-center justify-center gap-3 border border-gray-200 py-2 rounded-full hover:shadow p-4" onClick={handleGoogle}>
          <FcGoogle className="text-xl" />
          <span>Continue with Google</span>
        </button>
      </div>
  );
};

export default SignUp;
