import React from "react";
import { FaFacebook, FaStar, FaWikipediaW, FaYoutube } from "react-icons/fa";
import homeImage from "../../assets/image/homemajor.png";

const HomesliderCard = () => {
  return (
    <div className="bg-majorbg pl-1 text-white flex items-center w-full h-[735px] relative">
      {/* social icon start */}
      <div className="absolute bottom-10 left-8">
        <span className="text-white text-base font-medium font-['Inter'] uppercase leading-relaxed">Follow</span>
        <div className="flex items-center gap-4 pt-2">
          <FaFacebook size={15} />
          <FaWikipediaW size={15} />
          <FaYoutube size={15} />
        </div>
      </div>
      {/* social icon end */}

      {/* home text start*/}
      <div className="justify-center items-center flex flex-1" >
        <div>
          <span className="text-white text-[32px] font-normal font-['URWImperialW01-Regular'] uppercase leading-[42px]">Welcome Biography Of Major </span>
          <div className="">
            <span className="text-white text-9xl font-normal font-['URWImperialW01-Regular'] capitalize leading-[140px]">The Legacy of</span>

            <div className="flex items-center gap-4 ">
              <span className="text-white text-9xl font-normal font-['URWImperialW01-Regular'] capitalize leading-[140px]">a Warrior </span>
             <div className="mt-10">
             <button className="flex items-center justify-center text-white  border border-gray-800 hover:bg-white focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-full font-medium  text-sm px-5 py-2.5 text-center hover:text-black me-2 mb-2  dark:hover:text-black dark:hover:bg-white dark:focus:ring-white">
                <FaStar className="mx-1" size={15} />
                <FaStar className="mx-1" size={15} />
                <FaStar className="mx-1" size={15} />
            
              </button>
             </div>
            </div>
          </div>
          <div className="flex justify-end">
          <span className="text-white text-[26px] font-medium font-['Inter'] uppercase leading-[120px]">Major Abdul Ghani</span>

          </div>
        </div>
      </div>
      {/* home text end*/}

      {/* home image start */}
      <div className="ml-auto">
        <img src={homeImage} className="h-[735px] w-[737px]" alt="" />
      </div>
      {/* home image end */}
    </div>
  );
};

export default HomesliderCard;
