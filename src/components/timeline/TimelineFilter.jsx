import React, { useState } from "react";

const TimelineFilter = ({ filterItem }) => {
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
          onClick={() => handleFilterClick("born")}
          className={`bg-${
            activeFilter === "born" ? "majorbg text-white" : "gray-200"
          } shadow-md text-black  px-7  py-1.5 outline-gray-700 border rounded`}
        >
          <button>Born</button>
        </li>
        <li
          onClick={() => handleFilterClick("education")}
          className={`bg-${
            activeFilter === "education" ? "majorbg text-white" : "gray-200"
          } shadow-md text-black  px-7  py-1.5 outline-gray-700 border rounded`}
        >
          <button>Education</button>
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
          onClick={() => handleFilterClick("politcal")}
          className={`bg-${
            activeFilter === "politcal" ? "majorbg text-white" : "gray-200"
          } shadow-md text-black px-7  py-1.5 outline-gray-700 border rounded`}
        >
          <button>Political Carrer</button>
        </li>
        <li
          onClick={() => handleFilterClick("death")}
          className={`bg-${
            activeFilter === "death" ? "majorbg text-white" : "gray-200"
          } shadow-md text-black px-7  py-1.5 outline-gray-700 border rounded`}
        >
          <button>Death</button>
        </li>
      </ul>
    </div>
  );
};

export default TimelineFilter;
