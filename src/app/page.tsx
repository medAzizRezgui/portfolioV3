'use client';

import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import React, { useRef } from 'react';

import Sky from '../../public/assets/images/sky.jpg';

import { CircleCursor } from './components/CircleCursor';

export default function Home() {
  const parallax = useRef<IParallax>(null!);

  return (
    <div>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          speed={0}
          factor={1.5}
          style={{ backgroundImage: `url('${Sky.src}')` }}
        />
        <ParallaxLayer offset={0.5} speed={2}>
          <h1 className="text-center text-9xl font-semibold text-white">
            Hello there hehe
          </h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
