import React from 'react';
import logo from '../../assets/logo.svg';
import Styled from 'styled-components';

const MainHeaderWrap = Styled.div`
  img {
    width: 100px;
  }
`;

const MainHeader = () => {
  return (
    <MainHeaderWrap>
      <img src={logo} alt="logo" />
    </MainHeaderWrap>
  );
};

export default MainHeader;
