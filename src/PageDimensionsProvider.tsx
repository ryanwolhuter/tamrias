import React, { createContext, useContext, useState, useEffect } from 'react';

const pageDimensions = () => ({
  height: document.documentElement.scrollHeight,
  width: document.documentElement.clientWidth
});

export const PageDimensionsCtx = createContext(pageDimensions());

export function PageDimensionsProvider({ children }:any) {
  const [dimensions, setDimensions] = useState(pageDimensions());

  useEffect(() => {
    function handleResize() {
      setDimensions(pageDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <PageDimensionsCtx.Provider value={dimensions}>
      {children}
    </PageDimensionsCtx.Provider>
  )
}

export const usePageDimensions = () => useContext(PageDimensionsCtx);