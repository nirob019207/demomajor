// Nav.js
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';
import { FaFacebook, FaWikipediaW, FaYoutube } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Nav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-majorbg text-white w-full lg:px-8 px-4 fixed shadow-sm py-5 z-10">
      <div className="flex justify-between">
        <div className="uppercase">
          <p>Major.A</p>
          <p className="flex items-center">
            {" "}
            ghani <FaStar className="mx-1" size={15} />
          </p>
        </div>

        <div className="lg:block hidden">
          <ul className="flex justify-center items-center text-lg py-3 gap-4">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'underline' : ''}>Home</Link>
            </li>
            <li>
              <Link to="/legachy" className={location.pathname === '/legachy' ? 'underline' : ''}>Legacies</Link>
            </li>
            <li>
              <Link to="/military" className={location.pathname === '/military' ? 'underline' : ''}>Military Career</Link>
            </li>
            <li>
              <Link to="/anchor" className={location.pathname === '/anchor' ? 'underline' : ''}>Anchor</Link>
            </li>
            <li>
              <Link to="/timeline" className={location.pathname === '/timeline' ? 'underline' : ''}>Timeline</Link>
            </li>
            <li>
              <Link to="/allspeeach" className={location.pathname === '/allspeeach' ? 'underline' : ''}>Various Speeches</Link>
            </li>
            <li>
              <Link to="/photo" className={location.pathname === '/photo' ? 'underline' : ''}>Photo</Link>
            </li>
            <li>
              <Link to="/event" className={location.pathname === '/event' ? 'underline' : ''}>Event</Link>
            </li>
          </ul>
        </div>

        <div className="lg:block hidden py-3">
          <Link
            to="/contact"
            type="button"
            className="text-white border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-full font-medium text-sm px-3 py-2 text-center hover:text-black me-2 mb-2 dark:hover:text-black dark:hover:bg-white dark:focus:ring-white"
          >
            Contact
          </Link>
        </div>

        <div className="lg:hidden block">
          <div className="flex gap-2 items-center">
            {/* <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={21} />
            </a>
            <a href="https://en.wikipedia.org/wiki/Main_Page" target="_blank" rel="noopener noreferrer">
              <FaWikipediaW size={22} />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={22} />
            </a> */}
            <AiOutlineMenu size={30} color="#fff" onClick={toggleSidebar} />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <div className="w-full h-px bg-zinc-800 my-1"></div>
    </div>
  );
};

export default Nav;
