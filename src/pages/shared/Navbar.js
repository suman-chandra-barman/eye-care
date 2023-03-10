import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navLink = (
    <>
      <li>
        <Link to="/" className="active:bg-inherit">
          Home
        </Link>
      </li>
      <li>
        <Link to="/services" className="active:bg-inherit">
          Services
        </Link>
      </li>
      <li>
        <Link className="active:bg-inherit">Add Service</Link>
      </li>
      <li>
        <Link className="active:bg-inherit">My Review</Link>
      </li>
    </>
  );
  return (
    <nav className="sticky top-0 bg-white z-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link className="text-2xl font-mono text-success font-extrabold">
            Eye<span className="text-warning">Care</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <button
              onClick={logout}
              className="btn btn-error text-white rounded-3xl px-8"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-warning text-white rounded-3xl px-8">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
