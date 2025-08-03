import React, { use } from "react";
import { FaGoogle } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, setUser, updateUser, googleSignUp } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fname = form.fname.value;
    const lname = form.lname.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUser({ displayName: fname + " " + lname })
          .then(() => {
            toast.success("Register Successful");
          })
          .catch((error) => {
            toast.error(error.message);
          });
        toast.success("Register Successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Create an account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="fname"
            type="text"
            placeholder="First Name"
            className="w-full border-b outline-none py-2"
          />
          <input
            name="lname"
            type="text"
            placeholder="Last Name"
            className="w-full border-b outline-none py-2"
          />
          <input
            name="email"
            type="email"
            placeholder="Username or Email"
            className="w-full border-b outline-none py-2"
          />
          <input
            name="password"
            type="password"
            placeholder="Passwrd"
            className="w-full border-b outline-none py-2"
          />
          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 rounded mt-4"
          >
            Create an account
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 hover:underline">
            Login
          </Link>
        </p>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-t" />
          <span className="mx-2 text-gray-400">Or</span>
          <hr className="flex-grow border-t" />
        </div>

        <div className="space-y-3">
          <button className="flex items-center justify-center w-full border py-2 rounded hover:bg-gray-100" onClick={handleGoogle}>
            <FcGoogle size={25}></FcGoogle>
            <span className="ml-2">Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
