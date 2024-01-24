import React, { useState } from 'react';


const PhotoFilter = ({ filterItem }) => {

  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType);
    filterItem(filterType);
  };

  return (
    <div>
      <ul className="flex justify-center items-center gap-4 font-normal font-['URWImperialW01-Regular'] capitalize">
        <li className={`bg-${activeFilter === "all" ? "majorbg text-white" : "gray-200"} text-black px-7 py-1.5 outline-gray-700 border rounded`}>
          <button onClick={() => handleFilterClick("all")}>
            All
          </button>
        </li>
        <li className={`bg-${activeFilter === "major" ? "majorbg text-white" : "gray-200:"} shadow-md text-black  px-7 py-1.5 outline-gray-700 border rounded`}>
          <button onClick={() => handleFilterClick("major")}>
            Major
          </button>
        </li>
        <li className={`bg-${activeFilter === "anchor" ? "majorbg text-white" : "gray-200"} shadow-md text-black  px-7 py-1.5 outline-gray-700 border rounded`}>
          <button onClick={() => handleFilterClick("anchor")}>
            Anchor
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PhotoFilter;
