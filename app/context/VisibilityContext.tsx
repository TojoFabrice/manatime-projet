'use client'

import { createContext, ReactNode, useContext, useState } from 'react';

type VisibilityContextData = {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
};

const VisibilityContext = createContext<VisibilityContextData | undefined>(undefined);

type VisibilityContextProviderProps = {
  children: ReactNode;
};

export function VisibilityContextProvider({ children }: VisibilityContextProviderProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <VisibilityContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </VisibilityContext.Provider>
  );
}

// custom hook to access the context
export function useVisibilityContext() {
  const context = useContext(VisibilityContext);
  if (context === undefined) {
    throw new Error('useVisibilityContext must be used within a VisibilityContextProvider');
  }
  return context;
}
