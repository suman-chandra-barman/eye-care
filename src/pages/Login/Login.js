import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");

  // from submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;

    // Sign in user with email and password
    login(email, password)
      .then((result) => {
        setError("");
        from.reset();
        toast.success("Login successful !");
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  };

  // login with google
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast.success("Log in successful");
        console.log(result.user);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="flex flex-col  items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-700">
            Login Your Account
          </h3>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  className="block p-4 border border-1 w-full mt-1 border-gray-300 rounded-md shadow-sm"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className="mt-2">
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  autoComplete="true"
                  className="block p-4 border border-1 w-full mt-1 border-gray-300 rounded-md shadow-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className=" text-red-400">{error}</div>
            <div className="flex items-center mt-4">
              <button className="w-full text-xl font-bold px-4 py-3 text-white bg-success rounded-3xl hover:bg-teal-500">
                Log in
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            Don't have an account?{" "}
            <span>
              <Link className="text-success hover:underline" to="/register">
                Register
              </Link>
            </span>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 ">OR</p>
            <hr className="w-full" />
          </div>
          <div className="my-6 space-y-2">
            <button
              onClick={handleGoogleLogin}
              aria-label="Login with Google"
              type="button"
              className="flex items-center font-bold justify-center btn w-full p-4 btn-outline btn-success hover:bg-teal-500 rounded-3xl"
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
