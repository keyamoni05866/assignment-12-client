import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGuitar } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
console.log(user)
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructor">Instructors</Link>
      </li>
      <li>
          <Link to="/classes">Classes</Link>
        </li>

      {user && (
        <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      )}
    
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar   lg:px-24 py-3 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm text-lg   dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case lg:text-3xl  italic text-[#168aad]"
        >
          <FaGuitar></FaGuitar>
          TuneCamp
        </Link>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal text-xl px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
          <img src={user?.photoURL} alt=""  className="w-14 rounded-full mr-4" />
            <button
              onClick={handleLogOut}
              className="py-3 rounded-lg px-10  text-white text-xl hover:bg-[#0f4b5e] bg-[#168aad]"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="py-3 rounded-lg px-10  text-white text-xl hover:bg-[#0f4b5e] bg-[#168aad]"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
