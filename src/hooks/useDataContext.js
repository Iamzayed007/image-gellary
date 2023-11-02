import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";


export function useDataContext() {
    return useContext(DataContext);
  }