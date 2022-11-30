import React from "react";
import { CgFileDocument } from "react-icons/cg";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

let currentUser = JSON.parse(localStorage.getItem("user"));

const Navbar = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = "/login";
  }

  return (
    <div className="bg-red-100 p-2 flex justify-between items-center min-h-[10vh]">
      <div className="flex items-center">
        <Link to="/">
          <CgFileDocument size={32} />
        </Link>
        <Link to="/" className="text-xl ml-2">
          Blogify
        </Link>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-700 underline mx-1" : "text-blue-700 mx-1"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-700 underline mx-1" : "text-blue-700 mx-1"
          }
          to="/blogs"
        >
          Blogs
        </NavLink>
        {currentUser ? (
          <div onClick={handleLogout} className="text-blue-700 mx-1 inline cursor-pointer">Logout</div>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-700 underline mx-1" : "text-blue-700 mx-1"
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
