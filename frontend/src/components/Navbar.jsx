import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="logo-brand">
          <NavLink to="/" className="text-xl font-bold">
            AdityaMERN
          </NavLink>
        </div>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/" className="hover:text-gray-300">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-gray-300">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" className="hover:text-gray-300">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-gray-300">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="hover:text-gray-300">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="hover:text-gray-300">
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
