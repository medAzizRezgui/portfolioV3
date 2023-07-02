'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';

import { Navigation } from './components/Navigation';
import { Socials } from "./components/Socials";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navigation />
      <Socials/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
