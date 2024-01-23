import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-majorbg text-white w-full px-16 py-3">
      <div className="flex justify-between">
        <div className=" uppercase font-sans">
          <p>Major.A</p>
          <p className="flex items-center">
            {" "}
            ghani <FaStar className="mx-1" size={15} />
          </p>
        </div>

        <div>
          <ul className="flex justify-center items-center py-3 gap-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Various Speeches</Link>
            </li>
            <li>
              <Link to="/">Timeline</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <button
            type="button"
            class="text-white  border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-full font-medium  text-sm px-5 py-2.5 text-center hover:text-black me-2 mb-2  dark:hover:text-black dark:hover:bg-white dark:focus:ring-white"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
