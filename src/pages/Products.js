import React from "react";
import styled from "styled-components";
import { SingleProduct } from "../components";

const Products = () => {
  return (
    <Wrapper className="page">
      <div></div>

      <h1>All Products</h1>

      <SingleProduct />
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default Products;
