'use client';

import React from 'react';

import { Hero } from './components/Hero';
import RootLayout from './layout';

export default function Home() {
  return (
    <RootLayout>
      <Hero />
    </RootLayout>
  );
}
