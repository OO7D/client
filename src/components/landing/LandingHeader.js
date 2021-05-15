import React from 'react';
import logo from '../../assets/logo.svg';
import LandingCard from '../landing/LandingCard';
import Styled from 'styled-components';

const MainHeaderWrap = Styled.div`
  #logo {
    height: 38px;
    display: flex;
    margin: 41px auto;
  }
  #line {
    background-color: black;
    margin: 0;
    height: 1px;
  }
`;

const MainHeader = () => {
  return (
    <>
      <MainHeaderWrap>
        <img id="logo" src={logo} alt="logo" />
        <div id="line"></div>
      </MainHeaderWrap>
    </>
  );
};

export default MainHeader;
