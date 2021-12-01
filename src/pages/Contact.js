import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SimpleGoogleMap, ContactForm } from "../components";

const Contact = () => {
  return (
    <Wrapper className="page-100">
      <main>
        <div className="center">
          <h1>Contact Us</h1>
          <SimpleGoogleMap />
          <div id="contact">
            <h3>Hana Apparel</h3>
            <h5>1100 South San Pedro St. #E09 Los Angeles, CA 90015</h5>
            <br />
            <br />
            <h5>
              <FaWhatsapp /> Whatsapp: id
            </h5>
            <h5>
              <MdOutlineEmail /> email@gmail.com
            </h5>
            <br />
            <h5>Business Hours</h5>
            <h6>
              <b>M-F</b> 9AM - 5PM
            </h6>
            <h6>
              <b>Sat</b> 6AM - 1PM
            </h6>
            <h6>
              <b>Sun</b> 10AM - 2PM
            </h6>
            <br />
          </div>
        </div>
        <ContactForm />
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .center {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  h1 {
    margin-bottom: 2rem;
  }
  #contact {
    margin-top: 3rem;
  }
  h3 {
    margin-bottom: 1rem;
  }
`;

export default Contact;
