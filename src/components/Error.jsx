import React from "react";
import { useNavigate } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";
import bgImage from "../assets//Rectangle 1.png"; // Make sure the path is correct

const Error = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-black opacity-78  text-white p-10 rounded-xl text-center space-y-6 max-w-xl w-full ">
        <FaExclamationTriangle className="text-6xl text-yellow-400 mx-auto" />
        <h1 className="text-4xl font-bold">Oops! Something went wrong</h1>
        <p className="text-lg">
          The page you are looking for doesn’t exist or an unexpected error
          occurred.
        </p>
        <button
          className="btn btn-primary text-black px-6 py-3"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Error;
