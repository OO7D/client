import React from 'react';
import Styled from 'styled-components';

const ButtonWrap = Styled.div`
  button {
    width: 150px;
    height: 140px;
    box-sizing: border-box;
    border-radius: 10px;
    border: none;
    background-color: #CABFC5;
    color: white;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
`;

const Button = ({ text, onClickFunc, size, image }) => {
  return (
    <ButtonWrap>
      <button onClick={onClickFunc} style={{ fontSize: size }}>
        <img src={image} alt="" />
        {text}
      </button>
    </ButtonWrap>
  );
};

export default Button;
