import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonWrap = Styled.div`
  button {
    width: 150px;
    height: 140px;
    box-sizing: border-box;
    border-radius: 20px;
    border: none;
    background-color: #CABFC5;
    color: white;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Button = ({ text, onClickFunc }) => {
  return (
    <ButtonWrap>
      <button onClick={onClickFunc}>{text}</button>
    </ButtonWrap>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClickFunc: PropTypes.func,
};

export default Button;
