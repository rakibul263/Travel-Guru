import React from "react";
import sundorbon from "../assets/sundorbon.png"
import sajek from "../assets/Sajek.png"
import srimongol from "../assets/Sreemongol.png"
import { NavLink } from "react-router";

const RightBanner = () => {
  return (
    <div className="carousel carousel-center rounded-box max-w-full space-x-4 p-4 h-[400px]">
      <NavLink className="carousel-item">
        <img
          src={sajek}
          className="rounded-box opacity-100"
        />
      </NavLink>
      <NavLink className="carousel-item">
        <img
          src={sundorbon}
          className="rounded-box"
        />
      </NavLink>
      <NavLink className="carousel-item">
        <img
          src={srimongol}
          className="rounded-box"
        />
      </NavLink>
    </div>
  );
};

export default RightBanner;
