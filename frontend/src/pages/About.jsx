import React from "react";
import { NavLink } from "react-router-dom";
import about from "../images/about.png";
import { useAuth } from "../store/auth";

function About() {
  const { user } = useAuth();

  return (
    <main>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            {
              user.username ?
                <p>Welcome,  {user.username}</p> :
                <p>Welcome</p>

            }
            {/* <p>We care to cure your Health</p> */}
            <h1 className="text-4xl font-bold mb-4">Why Choose Us?</h1>
            <p className="mb-4">
              Expertise: Our team consists of experienced IT professionals who
              are passionate about staying up-to-date with the latest industry
              trends.
            </p>
            <p className="mb-4">
              Customization: We understand that every business is unique. That's
              why we create solutions that are tailored to your specific needs
              and goals.
            </p>
            <p className="mb-4">
              Customer-Centric Approach: We prioritize your satisfaction and
              provide top-notch support to address your IT concerns.
            </p>
            <p className="mb-4">
              Affordability: We offer competitive pricing without compromising
              on the quality of our services.
            </p>
            <p className="mb-4">
              Reliability: Count on us to be there when you need us. We're
              committed to ensuring your IT environment is reliable and
              available 24/7.
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
          <div className="hero-image">
            <img
              src={about}
              alt="coding buddies "
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
