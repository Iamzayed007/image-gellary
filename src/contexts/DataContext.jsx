import React, { createContext, useContext, useState } from "react";
import { imagesData } from "../data/data";


const DataContext = createContext();

export function useDataContext() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
const [images,setImages] =useState(imagesData)

  return (
    <DataContext.Provider
      value={{
        images,
        setImages
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
