import React from 'react';
import { Link } from 'react-router-dom';

const SpeachesCard = ({ sl, title, desc, onClick }) => {
  return (
    
      <Link to={`/speeches/${sl}`} onClick={onClick} className="relative flex md:max-w-[24rem] max-w-[22rem] flex-col overflow-hidden   bg-clip-border border border-zinc-300 shadow p-4">
        <h2 className="h-[140px] text-white text-2xl font-normal font-['URWImperialW01-Regular'] underline capitalize leading-[30px]">{title}</h2>
        <p class=" h-[180px] text-neutral-200 text-base font-normal font-['Inter'] leading-normal">{desc}</p>
        <div className='flex justify-center py-4 bottom-2'>
        <div class="w-[149px] h-11 px-[33px] py-4 rounded-[100px] border border-white justify-center items-center gap-2.5 inline-flex">
  <button class="text-white text-base font-medium font-['Inter'] leading-relaxed">Read More</button>
</div>
        </div>
    
      </Link>

      


  
  );
};

export default SpeachesCard;
