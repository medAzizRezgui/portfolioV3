'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import React, { useContext } from 'react';

import { CursorContext } from './Context/CursorContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {setCursorState } = useContext(CursorContext);

  return (
    <html lang="en">
      <div className="fixed right-10 top-10 flex flex-col gap-[10px] text-right text-[18px] font-medium  tracking-wider text-gray-500">
        <div
          onMouseEnter={() => setCursorState('normal')}
          onMouseLeave={() => setCursorState('default')}
          className="group relative flex items-center gap-[8px] hover:cursor-pointer"
        >
          <p className="relative z-[500] group-hover:text-white">About</p>
          <div className="absolute right-0 h-[10px] w-[10px] rounded-full bg-green transition-all duration-300 ease-linear group-hover:h-[25px] group-hover:w-[100px] group-hover:rounded-[8px]" />
        </div>
        <div className="flex items-center gap-[8px]">
          <p>Work</p>
          <div className="h-[10px] w-[10px] rounded-full bg-red" />
        </div>
        <div className="flex items-center gap-[8px]">
          <p>Contact</p>
          <div className="h-[10px] w-[10px] rounded-full bg-blue" />
        </div>
      </div>
      <body className={inter.className}>{children}</body>
      <div className="fixed left-10 top-10 flex flex-col gap-[10px] text-right text-[18px] font-medium  tracking-wider text-gray-500">
        <div className="h-[25px] w-[25px] rounded-full bg-green" />
        <div className="h-[25px] w-[25px] rounded-full bg-green" />
        <div className="h-[25px] w-[25px] rounded-full bg-green" />
      </div>
    </html>
  );
}
