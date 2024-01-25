// Nav.js
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';
import Sidebar from "./Sidebar";

const Nav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-majorbg text-white w-full lg:px-10 px-3 fixed shadow-sm py-3 z-10">
      <div className="flex justify-between">
        <div className=" uppercase font-sans">
          <p>Major.A</p>
          <p className="flex items-center">
            {" "}
            ghani <FaStar className="mx-1" size={15} />
          </p>
        </div>

        <div className="lg:block hidden">
          <ul className="flex justify-center items-center py-3 gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/legachy">Legacies</Link>
            </li>
            <li>
              <Link to="/slider">Military Career</Link>
            </li>
            <li>
              <Link to="/anchor">Anchor</Link>
            </li>
            <li>
              <Link to="/timeline">Timeline</Link>
            </li>
            <li>
              <Link to="/allspeeach">Various Speeches</Link>
            </li>
            <li>
              <Link to="/photo">Photo</Link>
            </li>
            <li>
              <Link to="/photo">Event</Link>
            </li>
           
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="lg:block hidden">
          <button
            type="button"
            className="text-white  border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-full font-medium  text-sm px-5 py-2.5 text-center hover:text-black me-2 mb-2  dark:hover:text-black dark:hover:bg-white dark:focus:ring-white"
          >
            Contact
          </button>
        </div>

        <div className="lg:hidden block">
          <AiOutlineMenu size={30} color="#fff" onClick={toggleSidebar} />
        </div>
      </div>
    

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <div className="w-full h-px bg-zinc-800 my-1"></div>
    </div>
  );
};

export default Nav;
