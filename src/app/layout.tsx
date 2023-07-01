'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import React, { useContext } from 'react';
import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoUpwork,
  BiMailSend,
} from 'react-icons/bi';

import { CursorContext } from './Context/CursorContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setCursorState } = useContext(CursorContext);

  return (
    <html lang="en">
      <div
        onMouseEnter={() => setCursorState('normal')}
        onMouseLeave={() => setCursorState('default')}
        className="fixed right-10 top-10 flex flex-col gap-[20px] text-right text-[18px] font-medium  tracking-wider text-gray-500"
      >
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
      <div className="fixed left-10 top-40 flex flex-col gap-[25px] text-right text-[18px] font-medium  tracking-wider text-gray-500">
        <div
          onMouseEnter={() => setCursorState('eat')}
          onMouseLeave={() => setCursorState('default')}
          className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-green"
        >
          <BiLogoLinkedin className="h-[25px] w-[25px] text-black" />
        </div>
        <div
          onMouseEnter={() => setCursorState('eat')}
          onMouseLeave={() => setCursorState('default')}
          className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-green"
        >
          <BiLogoUpwork className="h-[25px] w-[25px] text-black" />
        </div>{' '}
        <div
          onMouseEnter={() => setCursorState('eat')}
          onMouseLeave={() => setCursorState('default')}
          className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-green"
        >
          <BiLogoGithub className="h-[25px] w-[25px] text-black" />
        </div>{' '}
        <div
          onMouseEnter={() => setCursorState('eat')}
          onMouseLeave={() => setCursorState('default')}
          className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-green"
        >
          <BiMailSend className="h-[25px] w-[25px] text-black" />
        </div>
      </div>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
