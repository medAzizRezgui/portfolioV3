'use client';

import React, { useState } from 'react';

import { Hero } from './components/Hero';
import { CursorContext } from './Context/CursorContext';
import RootLayout from './layout';

export default function Home() {
  const [cursorState, setCursorState] = useState('');
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CursorContext.Provider value={{ cursorState, setCursorState }}>
      <RootLayout>
        <Hero />
      </RootLayout>
    </CursorContext.Provider>
  );
}
