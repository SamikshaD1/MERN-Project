import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

function Navbar() {
  const { isLoggedIn, user } = useAuth();



  return (
    <header className="bg-gray-800 text-indigo-500">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="logo-brand text-xl font-bold">
          <NavLink to="/">Aditya</NavLink>
        </div>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className="hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-gray-300 transition duration-300 ease-in-out"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className="hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Contact
              </NavLink>
            </li>
            {/* Logout functionality */}
            {isLoggedIn ? (
              <>
                {
                  user.isAdmin === true &&
                  <li>
                    <NavLink
                      to="/admin"
                      className="hover:text-gray-300 transition duration-300 ease-in-out"
                    >
                      Admin
                    </NavLink>
                  </li>
                }
                <li>
                  <NavLink
                    to="/logout"
                    className="hover:text-gray-300 transition duration-300 ease-in-out"
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/register"
                    className="hover:text-gray-300 transition duration-300 ease-in-out"
                  >
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className="hover:text-gray-300 transition duration-300 ease-in-out"
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
