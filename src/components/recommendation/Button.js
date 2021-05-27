import React, { useState } from 'react';
import Styled from 'styled-components';

const ButtonWrap = Styled.div`
  .btn{
    margin-top: 27px;
    width: 150px;
    height: 140px;
    border-radius: 10px;
    border: none;
    background-color: #CABFC5;
    color: white;
    font-size: 14px;
    font-weight: bold;
  }
  .btn:focus {
    border: none;
    outline: none;
  }
  #btn2 {
    margin-left: 12px;
  }
`;

const Button = props => {
  const text = useState(props.text)[0];
  const id = useState(props.id)[0];
  const svg = useState(props.svg)[0];
  return (
    <ButtonWrap>
      <button className='btn' id={id}>
        <img src={svg}></img> 
        <div>{text}</div>
      </button>
    </ButtonWrap>
  );
};

export default Button;