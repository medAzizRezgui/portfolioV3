'use client';

import { createContext } from 'react';

export const CursorContext = createContext<{
  cursorState: string;
  setCursorState: React.Dispatch<React.SetStateAction<string>>;
}>({ cursorState: '', setCursorState: () => {} });
