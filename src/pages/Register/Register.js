import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="flex flex-col  items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-700">
            Create a new account
          </h3>
        </div>
        <div className="w-full px-6 py-10 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="name"
                className="block p-4 w-full mt-1 border-gray-300 rounded-md border border-1 shadow-sm"
                placeholder="Full name"
                required
              />
            </div>
            <div className="mt-4">
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="photoURL"
                  className="block p-4 w-full mt-1 border-gray-300 rounded-md border border-1 shadow-sm"
                  placeholder="Profile photo URL"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  className="block p-4 border border-1 w-full mt-1 border-gray-300 rounded-md shadow-sm"
                  placeholder="Email address"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  className="block p-4 border border-1 w-full mt-1 border-gray-300 rounded-md shadow-sm"
                  placeholder="Password"
                  autoComplete="true"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="confirm_password"
                  className="block p-4 border border-1 w-full mt-1 border-gray-300 rounded-md shadow-sm"
                  placeholder="Confirm password"
                  autoComplete="true"
                  required
                />
              </div>
            </div>
            <div className=" text-red-400">{}</div>

            <div className="flex items-center mt-4">
              <button className="w-full p-4 text-white bg-success rounded-3xl hover:bg-teal-500">
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <Link className="text-success hover:underline" to="/login">
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
