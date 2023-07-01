import React, { useContext } from 'react';

import { CursorContext } from '../../Context/CursorContext';
import { CircleCursor } from '../CircleCursor';

export const Hero = () => {
  const { setCursorState } = useContext(CursorContext);

  return (
    <div className="h-[100vh] w-full bg-black">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <p className="text-[20px] font-medium uppercase tracking-[5px] text-white">
          Rezgui med aziz
        </p>
        <h1
          onMouseEnter={() => setCursorState('text')}
          onMouseLeave={() => setCursorState('default')}
          className="mx-auto w-[886px] text-center text-[120px] font-[700] uppercase leading-[120px] text-white"
        >
          Crafting exceptional code for boundless possibilities.
        </h1>
      </div>
      <CircleCursor />
    </div>
  );
};
