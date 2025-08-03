import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Create an account
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border-b outline-none py-2"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border-b outline-none py-2"
          />
          <input
            type="email"
            placeholder="Username or Email"
            className="w-full border-b outline-none py-2"
          />
          <input
            type="password"
            placeholder="Passwrd"
            className="w-full border-b outline-none py-2"
          />
          <input
            type="password"
            placeholder="Confrim Passowrd"
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
          <a href="/login" className="text-orange-500 hover:underline">
            Login
          </a>
        </p>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-t" />
          <span className="mx-2 text-gray-400">Or</span>
          <hr className="flex-grow border-t" />
        </div>

        <div className="space-y-3">
          <button className="flex items-center justify-center w-full border py-2 rounded hover:bg-gray-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="Facebook"
              className="w-5 h-5 mr-2"
            />
            Continue with Facebook
          </button>
          <button className="flex items-center justify-center w-full border py-2 rounded hover:bg-gray-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
