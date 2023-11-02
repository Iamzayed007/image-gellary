import React, { createContext, useContext, useState } from "react";
import { imagesData } from "../data/data";


export const DataContext = createContext();


export function DataProvider({ children }) {
const [images,setImages] =useState(imagesData)
const [count,setCount] =useState(0)

  return (
    <DataContext.Provider
      value={{
        images,
        setImages,
        count,
        setCount
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
