import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail, MdCopyright } from "react-icons/md";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper className="page-center">
      <footer className="footer">
        <div>
          <p>
            <GrLocation />
            1100 S San Pedro St #E09, Los Angeles, CA 90015
          </p>
          <p>
            <FaWhatsapp /> Whatsapp: id | <MdOutlineEmail /> email@gmail.com
          </p>
          <p>
            <b>
              <MdCopyright /> Copyright 2021 Hana Apparel. All Rights Reserved.
            </b>
          </p>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
   {
    background-color: rgba(211, 211, 211, 0.3);
  }
  p {
    font-size: 1.1rem;
  }
  #footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
  }
`;

export default Footer;
