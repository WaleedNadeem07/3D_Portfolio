import React from 'react';
import styled, { keyframes } from 'styled-components';


const GlowingButton = styled.button`
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #915eff; /* Updated to purple */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: filter 0.3s ease-in-out;

  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    z-index: -1;
    animation: laserAnimation 2s infinite;
  }

  &:hover:before,
  &:active:before {
    width: 200%;
    height: 200%;
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }

  &:active {
    box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.7); /* Updated glow color */
  }

  &:hover {
    filter: brightness(1.2); /* Increase brightness on hover */
  }

  @keyframes laserAnimation {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
  }
`;

export default GlowingButton;
