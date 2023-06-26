'use client';

import React, { useState } from 'react';

import { CircleCursor } from './components/CircleCursor';

export default function Home() {
  const [isContact, setIsContact] = useState(false);
  return (
    <div className="relative flex h-[100vh] w-full  items-center justify-center bg-white">
      <h1
        onMouseEnter={() => setIsContact(true)}
        onMouseLeave={() => setIsContact(false)}
        className="absolute top-0 cursor-none  text-9xl font-semibold text-white"
      >
        Goodbye World
      </h1>
      <h1
        onMouseEnter={() => setIsContact(true)}
        onMouseLeave={() => setIsContact(false)}
        className="absolute top-0 cursor-none  text-9xl font-semibold"
      >
        Hello World
      </h1>

      <CircleCursor isContact={isContact} />
    </div>
  );
}
