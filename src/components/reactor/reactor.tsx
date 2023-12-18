import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Reactor = () => (
  <ReactorContainer>
    <CircleContainer>
      <CircleElementOne></CircleElementOne>
      <CircleElementTwo></CircleElementTwo>
      <CircleElementThree></CircleElementThree>
      <CircleElementFour></CircleElementFour>
      <CircleElementFive></CircleElementFive>
      <CircleElementSix></CircleElementSix>
    </CircleContainer>
  </ReactorContainer>
);

export default Reactor;

const ReactorContainer = styled.div`
  width: 260px;
  height: 260px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(65, 167, 235, 0.2) 0px 0px 50px 15px,
    rgba(2, 255, 255, 0.2) 0px 0px 70px 15px inset;
    
`;

const CircleContainer = styled.div`
  width: 200px;
  height: 200px;
  border: 7.5px solid rgb(114, 171, 255);
  border-radius: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spinning = () => keyframes`
  0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
`;
const CircleElementOne = styled.div`
  width: 95%;
  height: 95%;
  box-sizing: border-box;
  border-width: 13px 15px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0) rgb(53, 121, 224);
  border-image: initial;
  position: relative;
  border-radius: 500px;
  z-index: 1;
  animation: 1.5s linear 0s infinite reverse none running spinning;
  animation: ${spinning} 1s linear infinite;
`;

const CircleElementTwo = styled.div`
  width: 60%;
  height: 60%;
  border: solid 7.5px rgb(53, 121, 224);
  position: absolute;
  border-radius: 100%;
`;

const CircleElementThree = styled.div`
  width: 70%;
  height: 70%;
  border-width: 20px 20px 20px 20px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0) rgb(53, 121, 224) rgb(53, 121, 224)
    rgba(0, 0, 0, 0);
  border-image: initial;
  position: absolute;
  border-radius: 100%;
`;

const CircleElementFour = styled.div`
  width: 70%;
  height: 70%;
  border-width: 27px 27px 27px 27px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0) rgba(114, 170, 255, 0.733)
    rgba(114, 170, 255, 0.733) rgba(0, 0, 0, 0);
  border-image: initial;
  position: absolute;
  border-radius: 100%;
  animation: 3.5s linear 0s infinite reverse none running spin;
`;

const CircleElementFive = styled.div`
  width: 36%;
  height: 36%;
  border-width: 12px 12px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0) rgb(114, 171, 255);
  border-image: initial;
  border-radius: 100%;
  position: absolute;
  animation: ${spinning} 1s linear infinite;
`;

const CircleElementSix = styled.div`
  width: 20%;
  height: 20%;
  background-color: rgb(114, 171, 255);
  border-radius: 100%;
  position: absolute;
  animation: 4s ease-in-out 0s infinite normal none running
    circle-elements_colors-two;
  cursor: pointer;
`;
