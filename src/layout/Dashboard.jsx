import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaCanadianMapleLeaf,
  FaGripVertical,
  FaGuitar,
  FaHome,
  FaMusic,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";
import { useQuery } from "@tanstack/react-query";
import useInstructor from "../Hooks/useInstructor";

const Dashboard = () => {
  // const isAdmin = true;
  // const isInstructor = false;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  console.log();

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 h-full bg-[#b3dbe7] text-base-content text-xl  ">
            <h2 className="text-3xl text-center font-semibold mb-8 text-[#168aad] italic">
              TuneCamp
            </h2>

            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/manageClass">
                    <FaMusic></FaMusic> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageUser">
                    <FaUsers></FaUsers> Manage Users
                  </NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <NavLink to="/dashboard/addClass">
                    <FaCanadianMapleLeaf></FaCanadianMapleLeaf> Add A Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myClass">
                    <FaMusic></FaMusic> My Classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/selectedClass">
                    <FaMusic></FaMusic> My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enrolledClass">
                    <FaUsers></FaUsers> My Enrolled Classes
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            {/* common route */}
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/instructor">
                <FaUser></FaUser> Instructor
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes">
                <FaGuitar></FaGuitar> Classes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
