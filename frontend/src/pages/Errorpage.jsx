import React from "react";
import { NavLink } from "react-router-dom";

function Errorpage() {
  return (
    <section
      id="error-page"
      className="bg-gray-200 h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h2 className="text-6xl font-bold text-red-500">404</h2>
        <h4 className="text-2xl font-semibold mb-4">Sorry! Page not found</h4>
        <p className="text-gray-700">
          Oops! It seems like the page you're trying to access doesn't exist. If
          you believe there's an issue, feel free to report it, and we'll look
          into it.
        </p>
        <div className="mt-8 space-x-4">
          <NavLink
            to="/"
            className="inline-block rounded border border-indigo-600 bg-indigo-600 mr-5 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Return Home
          </NavLink>
          <NavLink
            to="/contact"
            className="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          >
            Report Problem
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Errorpage;
