import React from 'react';
import Styled from 'styled-components';
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
import PhotoUpload from './PhotoUpload';
>>>>>>> 1b5d98a8f69fc4d785a1c645190f4e4fd3eac2a6

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
<<<<<<< HEAD
    justify-content: center;
    align-items: center;
  }
`;

const Button = ({ text, onClickFunc }) => {
  return (
    <ButtonWrap>
      <button onClick={onClickFunc}>{text}</button>
=======
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
  input[type="file"] {
    display: none;
  }
`;

const Button = ({ text, onClickFunc, size, image, handleChangeFile }) => {
  return (
    <ButtonWrap>
      {text === '새 옷 추가하기' && (
        <PhotoUpload onChangeFunc={handleChangeFile} />
      )}
      <button onClick={onClickFunc} style={{ fontSize: size }}>
        <img src={image} alt="" />
        {text}
      </button>
>>>>>>> 1b5d98a8f69fc4d785a1c645190f4e4fd3eac2a6
    </ButtonWrap>
  );
};

<<<<<<< HEAD
Button.propTypes = {
  text: PropTypes.string,
  onClickFunc: PropTypes.func,
};

=======
>>>>>>> 1b5d98a8f69fc4d785a1c645190f4e4fd3eac2a6
export default Button;
