import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/login/register";

  const handleClick = () => {
    navigate("/");
  };
  const links = (
    <>
      <li className={`${isLoginPage ? "text-black" : "text-white"} text-xl`}>
        <NavLink to="/news">News</NavLink>
      </li>
      <li className={`${isLoginPage ? "text-black" : "text-white"} text-xl`}>
        <NavLink to="/destination">Destination</NavLink>
      </li>
      <li className={`${isLoginPage ? "text-black" : "text-white"} text-xl`}>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li className={`${isLoginPage ? "text-black" : "text-white"} text-xl`}>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-transparent  w-8/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <div className="flex items-center gap-8 text-white">
          <img
            onClick={handleClick}
            className="w-[120px] h-[56px]"
            src={logo}
            alt="Logo"
          />

          {isLoginPage ? (
            " "
          ) : (
            <div className="relative w-70 md:w-48 flex-1">
              <FaSearch
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search your Destination..."
                className="input input-bordered input-sm w-full bg-transparent border-white pl-8 text-white placeholder-white"
              />
            </div>
          )}
        </div>
      </div>
      <div className="navbar-end flex items-center gap-6">
        <ul className="menu menu-horizontal px-1">{links}</ul>
        <Link to="/login" className="btn btn-primary text-black">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
