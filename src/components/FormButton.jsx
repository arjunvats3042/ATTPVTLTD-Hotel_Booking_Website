import React from "react";
import styled from "styled-components";

const FormButton = () => {
  return (
    <StyledWrapper>
      <button>Book Now</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    margin-top: 1em;
    height: 3em;
    /* Use max-width instead of fixed width for responsiveness */
    max-width: 30em;
    width: 100%; /* Occupy full width of parent container */
    padding: 0 1em; /* Add some padding for smaller screens */
    border: none;
    border-radius: 10em;
    background: #016dd9;
    font-size: 17px;
    color: #ffffff;
    font-family: inherit;
    font-weight: 500;
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
  }

  button:hover {
    animation: shake3856 0.3s linear infinite both;
  }

  @keyframes shake3856 {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(0);
    }
  }

  /* Media query for smaller screens */
  @media (max-width: 768px) {
    /* Adjust breakpoint as needed */
    button {
      font-size: 16px; /* Slightly smaller font size */
      height: 2.5em; /* Adjust height as needed */
    }
  }
`;

export default FormButton;
