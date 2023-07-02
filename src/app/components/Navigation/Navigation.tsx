import React from 'react';

export const Navigation = () => (
  <div className="fixed right-10 top-10 flex flex-col gap-[20px] text-right text-[18px] font-medium  tracking-wider text-gray-500">
    <div className="group relative flex items-center gap-[8px] hover:cursor-pointer">
      <p className="relative z-[500] pr-8 group-hover:text-white">About</p>
      <div className="absolute right-0 h-[10px] w-[10px] rounded-full bg-green transition-all duration-300 ease-linear group-hover:h-[30px] group-hover:w-[100px] group-hover:rounded-[8px]" />
    </div>
    <div className="group relative flex items-center gap-[8px] hover:cursor-pointer">
      <p className="relative z-[500] group-hover:text-white">Work</p>
      <div className="absolute right-0 h-[10px] w-[10px] rounded-full bg-red transition-all duration-300 ease-linear group-hover:h-[30px] group-hover:w-[100px] group-hover:rounded-[8px]" />
    </div>
    <div className="group relative flex items-center gap-[8px] hover:cursor-pointer">
      <p className="relative z-[500] group-hover:text-white">Contact</p>
      <div className="absolute right-0 h-[10px] w-[10px] rounded-full bg-blue transition-all duration-300 ease-linear group-hover:h-[30px] group-hover:w-[100px] group-hover:rounded-[8px]" />
    </div>
  </div>
);
