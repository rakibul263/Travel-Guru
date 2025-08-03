import React, { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logoutUser, setUser } = useContext(AuthContext);
  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/login/register";

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        setUser(null);
        toast.success("Logout Successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleClick = () => {
    navigate("/");
  };

  const links = (
    <>
      <li
        className={`${
          isLoginPage ? "text-black" : "text-white"
        } text-lg font-medium`}
      >
        <NavLink
          to="/news"
          className="hover:text-primary transition-colors whitespace-nowrap"
        >
          News
        </NavLink>
      </li>
      <li
        className={`${
          isLoginPage ? "text-black" : "text-white"
        } text-lg font-medium`}
      >
        <NavLink
          to="/destination"
          className="hover:text-primary transition-colors whitespace-nowrap"
        >
          Destination
        </NavLink>
      </li>
      <li
        className={`${
          isLoginPage ? "text-black" : "text-white"
        } text-lg font-medium`}
      >
        <NavLink
          to="/blog"
          className="hover:text-primary transition-colors whitespace-nowrap"
        >
          Blog
        </NavLink>
      </li>
      <li
        className={`${
          isLoginPage ? "text-black" : "text-white"
        } text-lg font-medium`}
      >
        <NavLink
          to="/contact"
          className="hover:text-primary transition-colors whitespace-nowrap"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-transparent w-11/12 lg:w-10/12 xl:w-8/12 mx-auto py-4">
      {/* Mobile Menu */}
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-4 shadow-lg"
          >
            {links}
            {user && (
              <li className="text-black text-lg font-medium pt-2 border-t border-gray-200">
                <span>{user.displayName}</span>
              </li>
            )}
          </ul>
        </div>

        {/* Logo and Search Section */}
        <div className="flex items-center gap-4 lg:gap-8">
          <img
            onClick={handleClick}
            className={`w-[100px] h-[50px] lg:w-[120px] lg:h-[56px] cursor-pointer transition-all duration-300 ${
              !isLoginPage ? "brightness-0 invert" : ""
            }`}
            src={logo}
            alt="Logo"
          />

          {!isLoginPage && (
            <div className="relative w-40 md:w-52 lg:w-64 hidden md:block">
              <FaSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search your Destination..."
                className="input input-bordered input-sm w-full bg-white/10 backdrop-blur-sm border-white/30 pl-10 pr-4 text-white placeholder-white/70 focus:bg-white/20 transition-all duration-300"
              />
            </div>
          )}
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-end">
        {/* Desktop Menu - Fixed Alignment */}
        <div className="hidden lg:flex items-center gap-6 mr-6">
          <NavLink
            to="/news"
            className={`${
              isLoginPage ? "text-black" : "text-white"
            } text-lg font-medium hover:text-primary transition-colors whitespace-nowrap`}
          >
            News
          </NavLink>
          <NavLink
            to="/destination"
            className={`${
              isLoginPage ? "text-black" : "text-white"
            } text-lg font-medium hover:text-primary transition-colors whitespace-nowrap`}
          >
            Destination
          </NavLink>
          <NavLink
            to="/blog"
            className={`${
              isLoginPage ? "text-black" : "text-white"
            } text-lg font-medium hover:text-primary transition-colors whitespace-nowrap`}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={`${
              isLoginPage ? "text-black" : "text-white"
            } text-lg font-medium hover:text-primary transition-colors whitespace-nowrap`}
          >
            Contact
          </NavLink>
        </div>

        {/* User Info and Auth Buttons - Fixed Width Container */}
        <div className="flex items-center justify-end min-w-[120px]">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-white font-semibold hidden lg:block text-sm truncate max-w-[100px]">
                {user.displayName}
              </span>
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-primary text-black hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm btn-primary text-black hover:bg-primary/90 transition-colors"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
