'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export const CircleCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

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
      height: 500,
      width: 500,
      x: position.x - 250,
      y: position.y - 250,
      backgroundColor: 'white',
      mixBlendMode: 'difference',
      borderWidth: '10px',
    },
    eat: {
      height: 60,
      width: 60,
      x: position.x - 30,
      y: position.y - 30,
      backgroundColor: '#00FFC2',
      mixBlendMode: 'difference',
    },
  };

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] h-[34px] w-[34px] rounded-[50%] border-2 border-green  "
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      variants={variants}
      animate="default"
    />
  );
};
