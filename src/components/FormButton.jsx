import React from "react";
import styled from "styled-components";

const FormButton = () => {
  return (
    <StyledWrapper>
      <button> Book Now</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
  margin-top: 1em;
    height: 3em;
    width: 30em;
    border: none;
    border-radius: 10em;
    background: #016dd9;
    font-size: 17px;
    color: #ffffff;
    font-family: inherit;
    font-weight: 500;
  }

  button:hover {
    animation: shake3856 0.3s linear infinite both;
  }

  @keyframes shake3856 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }

    20% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }

    40% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }

    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }

    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }

    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }
`;

export default FormButton;
