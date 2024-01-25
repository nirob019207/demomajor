import React, { useEffect, useState } from "react";
import { FaFacebook, FaStar, FaWikipediaW, FaYoutube } from "react-icons/fa";
import { slider } from "./imageSlider";

const HomesliderCard = () => {
  const [currentState,setCurrentState] = useState(0) 
  const gotoNext =(currentState)=>{
    setCurrentState(currentState)
  }
  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(currentState===2) {
        setCurrentState(0)
      }
      else {
        setCurrentState(currentState+1)
      }
    },10000)
    return ()=>clearInterval(timer)
  },[currentState])
  const info = slider[currentState];
  return (
   <div className="bg-majorbg py-4">
     <div className="pl-1 text-white flex items-center w-full h-[735px] relative">
      {/* social icon start */}
     
      {/* social icon end */}

      {/* home text start*/}
       <div className="justify-center items-center flex flex-1" >
        <div>

          <div className="">
            <span className="text-white 2xl:text-7xl xl:text-7xl  lg:text-6xl text-5xl font-normal font-['URWImperialW01-Regular'] capitalize lg:leading-[120px]">{info.title1}</span>

            <div className="flex items-center gap-4 ">
              <span className="text-white  2xl:text-7xl xl:text-7xl  lg:text-6xl text-5xl font-normal font-['URWImperialW01-Regular'] capitalize lg:leading-[120px]">{info.title2} </span>
             <div className="lg:mt-8 mt-6">
             <button className="flex items-center justify-center text-white  border border-gray-800 hover:bg-white focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-full font-medium  text-sm px-5 py-2.5 text-center hover:text-black me-2 mb-2  dark:hover:text-black dark:hover:bg-white dark:focus:ring-white">
                <FaStar className="mx-1" size={15} />
                <FaStar className="mx-1" size={15} />
                <FaStar className="mx-1" size={15} />
            
              </button>
             </div>
            </div>
          </div>
          <div className="flex justify-end">
          <span className="text-white lg:text-[26px] text-[16px] font-medium font-['Inter'] uppercase leading-[120px]">Major Abdul Ghani</span>

          </div>
        </div>
      </div> 
      {/* home text end*/}
        
      {/* home image start */}
       <div className="ml-auto lg:block hidden">
        <img src={info.image} className="h-[705px] 2xl:w-[607px] xl:w-[500px] w-[500px]" alt="" />
      </div> 
          
    </div>
    <div className="flex justify-center py-4">
      {slider.map((current,currentState)=>(
        <samp key={currentState} className='h-4 w-4 p-2 rounded-full mx-2 cursor-pointer bg-gray-200' onClick={()=>gotoNext(currentState)}></samp>
      ))}
    </div>
   </div>
  );
};

export default HomesliderCard;
