'use client';

import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';

import { CursorContext } from '../../Context/CursorContext';

export const CircleCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { cursorState } = useContext(CursorContext);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const variants = {
    normal: {
      x: position.x - 17,
      y: position.y - 17,
      backgroundColor: 'white',
      opacity: 0,
    },
    default: {
      x: position.x - 17,
      y: position.y - 17,
      backgroundColor: 'white',
    },
    text: {
      height: 400,
      width: 400,
      x: position.x - 200,
      y: position.y - 200,
      backgroundColor: 'white',
      mixBlendMode: 'difference',
    },
  };

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] h-[34px] w-[34px] rounded-[50%] "
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      variants={variants}
      animate={cursorState}
    />
  );
};
