import React from "react";
import styled from "styled-components";

const Servicecard = ({frontimg, title, description, backimg}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <img src={frontimg} alt="" />
              <strong>{title}</strong>
            </div>
          </div>
          <div className="front">
            <div className="img">
              <img src={backimg} alt="" />
            </div>
            <div className="front-content">
              <small className="badge">{title}</small>
              <div className="description">
                <strong>{description}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    overflow: hidden;
    width: 300px;
    height: 300px;
    position: relative;
    border-radius: 10px;
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 1s; /* Slower rotation */
    border-radius: 5px;
  }

  .front,
  .back {
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 10px;
    overflow: hidden;
  }

  .back {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    background-color: #151515;
    border-radius: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .back-content img {
    width: 90px;
    height: 90px;
    object-fit: contain;
  }

  .back-content strong {
    font-size: 18px;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  .front {
    transform: rotateY(180deg);
    color: white;
  }

  .front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .front-content .badge {
    background-color: #00000070;
    text-align: center;
    padding: 4px 12px;
    border-radius: 15px;
    backdrop-filter: blur(1px);
    font-size: 16px;
    font-weight: bold;
    color: white;
  }

  .description {
    box-shadow: 0px 0px 15px 5px rgba(255, 255, 255, 0.3);
    width: 100%;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(1px);
    border-radius: 10px;
    height: 60%;
    font-size: 13px;
    line-height: 1.6;
    color: white;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .front .img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .front .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: all 2s ease-in-out;
  }

  .card:hover .img img {
    transform: scale(1.2);
  }
`;

export default Servicecard;
