import React from "react";

function Register() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200 m-15">
        <div className="hero-content flex-col lg:flex-row-reverse gap-40">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>

          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="username"
                  name="username"
                  placeholder="username"
                  className="input input-bordered"
                  required
                  id="username"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                  id="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="phone"
                  placeholder="phone"
                  className="input input-bordered"
                  required
                  name="phone"
                  id="phone"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                  id="password"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
