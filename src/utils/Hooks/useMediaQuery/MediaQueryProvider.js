import React, { createContext } from "react";

export const MediaContext = createContext();

const DEFAULT_BREAKPOINTS = {
  sm: 480,
  md: 576,
  lg: 768,
  xl: 992,
  xxl : 1200
};

const orderedQuery = [
  {sm: 480},
  {md: 576},  
  {lg: 768},
  {xl: 992},
  {xxl : 1200}
];

const MediaQueryProvider = ({
  mediaQuery = DEFAULT_BREAKPOINTS,
  minWidth,
  maxWidth,
  delayWithPageResize = 250,
  children,
}) => {
  const returnOrderQueryChecker = () => {
    if (!maxWidth && !minWidth && !mediaQuery) return orderedQuery;
    return undefined;
  };
  
  return (
    <MediaContext.Provider
      value={{
        mediaQuery,
        delayWithPageResize : Number(delayWithPageResize),
        maxWidth,
        minWidth,
        orderedQuery: returnOrderQueryChecker(),
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export default MediaQueryProvider;
