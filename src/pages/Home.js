import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NewArrivals } from "../components";

const Home = () => {
  return (
    <Wrapper className="page-center page-100">
      <main>
        <div>
          <h1>Hana Apparel</h1>
          <Link to="/products">
            <button className="btn btn-dark"> To Our Products </button>
          </Link>
        </div>
        <NewArrivals />
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  h1 {
    font-size: 8rem;
    margin-top: 3rem;
    margin-bottom: 10rem;
    transition-delay: 2s;
  }
  button:hover {
    font-weight: bold;
    background-color: white;
    color: black;
  }
  div {
    margin-bottom: 7rem;
  }
`;

export default Home;
