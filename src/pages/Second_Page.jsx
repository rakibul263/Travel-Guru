import React from "react";
import bgImage from "../assets/Rectangle 1.png";

const Second_Page = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    ></div>
  );
};

export default Second_Page;
