import React from 'react';
import logo from '../../assets/logo.svg';
import Styled from 'styled-components';
import Welcome from './Welcome';

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
    <MainHeaderWrap>
      <img id="logo" src={logo} alt="logo" />
      <Welcome />
      <div id="line"></div>
    </MainHeaderWrap>
  );
};

export default MainHeader;
