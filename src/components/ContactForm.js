import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <Wrapper>
      <form
        className="row g-3 needs-validation"
        action="https://formspree.io/f/xnqleyar"
        method="POST"
        novalidate
      >
        <h4>Please let us know if you have any question.</h4>

        <div className="col-md-6">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            name="customer_name"
            autoFocus
            required
          />
          <div className="invalid-feedback">Please enter your name</div>
        </div>
        <div className="col-md-6">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            name="customer_email"
            required
          />
          <div className="invalid-feedback">Please enter your email</div>
        </div>

        <div className="col-12">
          <label for="text" className="form-label">
            Comment or Message
          </label>
          <input
            type="text"
            className="form-control textbox"
            id="text"
            placeholder="Enter any comment or message"
            name="customer_message"
          />
        </div>
        <button className="btn-sm btn-dark col-auto" type="submit">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  form {
    padding: 30px 100px;
    background-color: rgba(221, 221, 221, 0.3);
    margin-top: 100px;
    margin-left: 100px;
    margin-right: 100px;
    margin-bottom: 50px;
  }
  div {
    margin-bottom: 10px;
    font-size: 1.1rem;
  }
  h4 {
    text-align: center;
  }
  .textbox {
    height: 7rem;
  }
  button {
    justify-content: right;
    align-items: right;
    // moveit to the right
  }
`;

export default ContactForm;
