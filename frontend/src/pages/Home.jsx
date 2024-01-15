import React from "react";
import home from "../images/home.png";
import design from "../images/design.png";
import { NavLink } from "react-router-dom";
import Analytics from "../components/Analytics";

function Home() {
  return (
    < >
      {/* 1st section */}
      <section className="section-hero bg-white py-16 flex justify-center">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center  ">
          {/* hero content */}
          <div className="hero-content">
            <p className="text-gray-500">We are the World Best IT Company</p>
            <h1 className="text-4xl font-bold mb-5">
              Welcome to Aditya Deshmukh
            </h1>
            <p className="text-gray-600">
              Are you ready to take your business to the next level with
              cutting-edge IT solutions? Look no further! At Thapa Technical, we
              specialize in providing innovative IT services and solutions
              tailored to meet your unique needs.
            </p>
            <div className="btn btn-group mt-6">
              <NavLink
                className="inline-block rounded border border-indigo-600 bg-indigo-600 mr-5 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                href="/contact"
              >
                Connect Now
              </NavLink>

              {/* Border */}

              <NavLink
                className="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                href="/services"
              >
                Learn More
              </NavLink>
            </div>
          </div>

          {/* hero images */}
          <div className="hero-image">
            <img src={home} alt="coding together" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* 2nd section */}
      <Analytics />

      {/* 3rd section */}
      <section className="section-hero bg-white py-16 flex justify-center">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* hero images */}
          <div className="hero-image">
            <img src={design} alt="coding together" className="w-full h-auto" />
          </div>

          {/* hero content */}
          <div className="hero-content">
            <p className="text-gray-500">We are here to help you</p>
            <h1 className="text-4xl font-bold mb-4">Get Started Today</h1>
            <p className="text-gray-600">
              Ready to take the first step towards NavLink more efficient and
              secure IT infrastructure? Contact us today for NavLink free
              consultation and let's discuss how Thapa Technical can help your
              business thrive in the digital age.
            </p>
            <div className="btn btn-group mt-6">
              <NavLink
                className="inline-block rounded border border-indigo-600 bg-indigo-600 mr-5 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                href="/contact"
              >
                Connect Now
              </NavLink>

              {/* Border */}

              <NavLink
                className="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                href="/services"
              >
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
