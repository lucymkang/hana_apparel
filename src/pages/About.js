import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Wrapper className="page-center page-100">
      <main>
        <article>
          <h1>Hana Apparel</h1>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-lg-6" id="container">
                <img src="https://www.cameronproffitt.com/wp-content/uploads/2017/07/Womens-clothing-stores-with-tall-sizes.-Dresses-for-women-over-59.jpg"></img>
              </div>
              <div className="col-lg-6" id="container">
                <h5>Hello there,</h5>
                <br />
                <p>
                  We are a small, family-owned business specializing in women's
                  clothing wholesale since 2010. We are located in the center of
                  Downtown Los Angeles Fashion District, in the San Pedro
                  Wholesale Mart suite #E09.
                </p>
                <p>
                  Our clothings are affordable and high-quality. Please check
                  out our products under the products page and
                  <Link to="/contact" id="link">
                    {" "}
                    contact
                  </Link>{" "}
                  us if you have any inquiries. Thank you for visiting our
                  website. We greatly appreciate your support!
                </p>
              </div>
            </div>
          </div>
        </article>
        <Link to="/products">
          <button className="btn">To Our Products</button>
        </Link>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  h1 {
    margin-top: 2rem;
    margin-bottom: 5rem;
  }
  #container {
    padding: 10px 10px 10px 10px;
  }
  #link {
    color: black;
  }
  img {
    width: 30rem;
  }
  .container {
    margin-bottom: 5rem;
  }
`;

export default About;
