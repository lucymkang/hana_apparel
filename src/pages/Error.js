import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper className="page-center page-100">
      <main>
        <h1>404</h1>
        <h3>Page not found</h3>
        <h5>The page you are looking for is unavailable.</h5>
        <Link to="/" className="btn btn-dark">
          Back To Home
        </Link>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  h1 {
    margin-bottom: 5rem;
    font-weight: bold;
  }
  h3 {
    font-weight: bold;
    margin-bottom: 2rem;
  }
  h5 {
    margin-bottom: 1rem;
  }
`;

export default Error;
