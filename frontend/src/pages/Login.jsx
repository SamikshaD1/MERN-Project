import React, { useState } from "react";
import login from "../images/login.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // Navgate use
  const navigate = useNavigate();
  const { servertokenINS } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const res_data = await response.json();
        console.log("res from server: ", res_data.token);
        servertokenINS(res_data.token);
        setUser({ email: "", password: "" });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="bg-gray-100 mx-10">
        <main className="container mx-auto py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Registration Image */}
            <div className="registration-image reg-img">
              <img
                src={login}
                alt="a nurse with a cute look"
                width="400"
                height="500"
                className="rounded-lg"
              />
            </div>

            {/* Registration Form */}
            <div className="registration-form">
              <h1 className="text-4xl font-extrabold mb-6">Login</h1>
              <form onSubmit={handleSubmit}>
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
                    value={user.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-600 font-medium mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>

                <button
                  type="submit"
                  // className="inline-flex items-center gap-2 rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                  className="w-full py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Login;
