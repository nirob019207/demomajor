import React, { useState } from "react";

const LegachyFilter = ({ filterItem }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType);
    filterItem(filterType);
  };

  return (
    <div>
      <ul className="flex justify-center items-center gap-4  font-normal font-['URWImperialW01-Regular'] capitalize">
        <li
          onClick={() => handleFilterClick("all")}
          className={`bg-${
            activeFilter === "all" ? "majorbg text-white" : "gray-200"
          } text-black lg:px-7 px-1 py-1.5 outline-gray-700 border rounded`}
        >
          <button>All</button>
        </li>
        <li
          onClick={() => handleFilterClick("warrior")}
          className={`bg-${
            activeFilter === "warrior" ? "majorbg text-white" : "gray-200"
          } shadow-md text-black  px-7  py-1.5 outline-gray-700 border rounded`}
        >
          <button>Warrior</button>
        </li>
       
        <li
          onClick={() => handleFilterClick("east")}
          className={`bg-${
            activeFilter === "east" ? "majorbg text-white" : "gray-200"
          } shadow-md text-black  px-7  py-1.5 outline-gray-700 border rounded`}
        >
          <button>East Bengle Regiment</button>
        </li>
        <li
          onClick={() => handleFilterClick("political")}
          className={`bg-${
            activeFilter === "political" ? "majorbg text-white" : "gray-200"
          } shadow-md text-black px-7  py-1.5 outline-gray-700 border rounded`}
        >
          <button>Political Carrer</button>
        </li>
        
      </ul>
    </div>
  );
};

export default LegachyFilter;
