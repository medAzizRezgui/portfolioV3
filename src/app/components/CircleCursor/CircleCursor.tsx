'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

type Props = {
  isContact: boolean;
};
export const CircleCursor = ({ isContact }: Props) => {
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
  }, [isContact]);

  const variants = {
    default: {
      x: position.x - 17,
      y: position.y - 17,
    },
    text: {
      height: 200,
      width: 200,
      x: position.x - 100,
      y: position.y - 100,
      backgroundColor: 'white',
      mixBlendMode: 'difference',
    },
  };

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 h-[34px] w-[34px] rounded-[50%] bg-black"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      variants={variants}
      animate={isContact ? 'text' : 'default'}
    />
  );
};
