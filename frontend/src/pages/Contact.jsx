import React, { useState } from "react";
import Submit from "../images/support.png";
import { useAuth } from "../store/auth";

function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: " ",
    message: "",
  });

  const [userData, setuserData] = useState(true);

  const { user } = useAuth();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setuserData(false);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);
    try {
      const response = await fetch(`http://localhost:5000/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact({
          username: "",
          email: "",
          message: "",
        });
        console.log("ok done yaar!");
        alert("ok done yaar!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="mx-10">
      <main className="container mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="registration-image reg-img">
            <img
              src={Submit}
              alt="a nurse with a cute look"
              width="400"
              height="500"
              className="rounded-lg"
            />
          </div>

          {/* Form */}
          <div className="registration-form">
            <h1 className="text-4xl font-extrabold mb-6">Contact us</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={contact.username}
                  onChange={handleChange}
                  required
                  autoComplete="on"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  autoComplete="on"
                  value={contact.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-3">
                  message
                </label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleChange}
                  required
                  cols="30"
                  rows="6"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                ></textarea>
              </div>

              <button
                type="submit"
                // className="inline-flex items-center gap-2 rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                className="w-full py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>

      <section className="mb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </section>
  );
}

export default Contact;
