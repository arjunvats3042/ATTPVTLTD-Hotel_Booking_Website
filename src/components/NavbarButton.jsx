import React from "react";
import styled from "styled-components";

const NavbarButton = ({label = "Hover Me"}) => {
  return (
    <StyledWrapper>
      <button>
        <span>{label}</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    padding: 0.1em 0.25em;
    width: 8.5em; /* Reduced width */
    height: 3.5em; /* Reduced height */
    background-color: #212121;
    border: 0.08em solid #fff;
    border-radius: 0.3em;
    font-size: 11px; /* Slightly smaller font size */
    cursor: pointer;
  }

  button span {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0.3em; /* Reduced bottom offset */
    width: 6.5em; /* Reduced width */
    height: 2.2em; /* Reduced height */
    background-color: #212121;
    border-radius: 0.2em;
    font-size: 1.2em; /* Slightly smaller font size */
    color: #fff;
    border: 0.08em solid #fff;
    box-shadow: 0 0.4em 0.1em 0.019em #fff;
  }

  button span:hover {
    transition: all 0.5s;
    transform: translate(0, 0.4em);
    box-shadow: 0 0 0 0 #fff;
  }

  button span:not(:hover) {
    transition: all 1s;
  }
`;

export default NavbarButton;
