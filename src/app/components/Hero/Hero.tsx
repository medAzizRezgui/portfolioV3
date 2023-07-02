import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React from 'react';

import Moons from '@/images/Frame 2.png';
import Dust from '@/images/Frame 3.png';
import Rocks from '@/images/Frame 4.png';

import { CircleCursor } from '../CircleCursor';

export const Hero = () => (
  <div className="h-[100vh] w-full bg-black">
    <CircleCursor />
    <Parallax pages={2}>
      <ParallaxLayer
        speed={-1}
        offset={0}
        factor={1}
        style={{
          backgroundImage: `url('${Moons.src}')`,
          backgroundSize: 'cover',
        }}
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center">
          <p className="text-[20px] font-medium uppercase tracking-[5px] text-green">
            Rezgui med aziz
          </p>
          <h1 className="mx-auto w-[886px] text-center text-[120px] font-[700] uppercase leading-[120px] text-white">
            <span className="text-green">Craft</span>ing exceptional{' '}
            <span className="text-red">code</span> for boundless possibilities
            <span className="text-yellow">.</span>
          </h1>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        speed={-1.5}
        offset={0}
        factor={1}
        style={{
          backgroundImage: `url('${Dust.src}')`,
          backgroundSize: 'cover',
        }}
      />
      <ParallaxLayer
        speed={1}
        offset={0.5}
        factor={1}
        style={{
          backgroundImage: `url('${Rocks.src}')`,
          backgroundSize: 'cover',
        }}
      />
      <ParallaxLayer
        speed={1}
        offset={1}
        factor={1}
        style={{ backgroundColor: 'black' }}
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center">
          <p className="text-[20px] font-medium uppercase tracking-[5px] text-green">
            Rezgui med aziz
          </p>
          <h1 className="mx-auto w-[886px] text-center text-[120px] font-[700] uppercase leading-[120px] text-white">
            <span className="text-green">Craft</span>ing exceptional{' '}
            <span className="text-red">code</span> for boundless possibilities
            <span className="text-yellow">.</span>
          </h1>
        </div>
      </ParallaxLayer>
    </Parallax>
  </div>
);
