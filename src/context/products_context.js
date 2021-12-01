import React, { useContext, useReducer } from "react";
import reducer from "../reducers/products_reducer";

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  new_arrivals: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const 

};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
