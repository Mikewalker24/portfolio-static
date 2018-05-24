import React from 'react';
import styled from 'styled-components'

const Hamburger = ({ color, handleClick, isOpen }) => {
  return (
     <StyledHamburger color={color} onClick={handleClick} className={isOpen ? 'open' : ''}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </StyledHamburger>
  );
};

const StyledHamburger = styled.div`
  width: 30px;
  height: 23px;
  margin-left: 35px;
  position: relative;
  z-index: 10;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  
    span {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: ${({color}) => color};
      border-radius: 0;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: .25s ease-in-out;
    }

    span:nth-child(1) {
      top: 0px;
    }

    span:nth-child(2),
    span:nth-child(3) {
      top: 10px;
    }

    span:nth-child(4) {
      top: 20px;
    }

    &.open span:nth-child(1) {
      top: 10px;
      width: 0%;
      left: 50%;
      opacity: 0;
    }

    &.open span:nth-child(2) {
      transform: rotate(45deg);
    }

    &.open span:nth-child(3) {
      transform: rotate(-45deg);
    }

    &.open span:nth-child(4) {
      top: 10px;
      width: 0%;
      left: 50%;
      opacity: 0;
    }
`

export default Hamburger;