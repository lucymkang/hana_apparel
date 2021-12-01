import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import { useProductsContext } from "./products_context";

const initialState = {
  filtered_products: [],
  all_products: [],
  sort: "By name (a-z)",
  filters: {
    text: "",
    category: "all",
    color: "all",
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
