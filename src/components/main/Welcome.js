import React from 'react';
import Styled from 'styled-components';
import propTypes from 'prop-types';

const WelcomeWrap = Styled.div`
  #welcome {
    font-weight: bold;
    text-align: right;
    font-size: 20px;
    margin-bottom: 3px;
    margin-right: 5px;
  }
  #welcomeName {
    color: #f79c43;
  }
`;

const Welcome = ({ name }) => {
  return (
    <WelcomeWrap>
      <div id="welcome">
        <span id="welcomeName">{name}</span>
        <span>님, 환영합니다.</span>
      </div>
    </WelcomeWrap>
  );
};

Welcome.propTypes = {
  name: propTypes.string,
};

Welcome.defaultProps = {
  name: '수연',
};

export default Welcome;
