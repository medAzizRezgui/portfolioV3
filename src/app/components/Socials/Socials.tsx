'use client';

import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoUpwork,
  BiMailSend,
} from 'react-icons/bi';

export const Socials = () => (
  <div className="fixed left-10 top-40 flex flex-col gap-[25px] text-right text-[18px] font-medium  tracking-wider text-gray-500">
    <BiLogoLinkedin className="h-[25px] w-[25px] rounded-full bg-green text-black" />

    {/* <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-green"> */}
    {/*  <BiLogoUpwork className="h-[25px] w-[25px] text-black" /> */}
    {/* </div> */}
    {/* <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-green"> */}
    {/*  <BiLogoGithub className="h-[25px] w-[25px] text-black" /> */}
    {/* </div> */}
    {/* <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-green"> */}
    {/*  <BiMailSend className="h-[25px] w-[25px] text-black" /> */}
    {/* </div> */}
  </div>
);
