import React from "react";
import { Link } from "react-router";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Be a Rider", path: "/rider" },
  ];

  return (
    <div>
      <div className="navbar bg-white my-4 px-6 rounded-2xl">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex">
            <Logo/>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-3">
          <Link className="btn shadow-none border-lime-300 bg-white w-24 rounded-2xl">Login</Link>
          <Link className="btn shadow-none border-lime-300 bg-white w-24 rounded-2xl">Register</Link>
          <Link className="btn shadow-none border-lime-300 bg-white w-24 rounded-2xl">Log Out</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
