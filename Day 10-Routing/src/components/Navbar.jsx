import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4 text-white flex justify-evenly items-center">
      <h1 className="text-2xl font-bold">Navbar</h1>
      <div className="flex gap-10 ">
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? "limegreen" : "white" })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({ color: isActive ? "limegreen" : "white" })}
        >
          About
        </NavLink>
        <NavLink
          to="/courses"
          style={({ isActive }) => ({ color: isActive ? "limegreen" : "white" })}
        >
          Courses
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
