import React from 'react';
import logo from '../../assets/logo.svg';
import Styled from 'styled-components';

const SignupHeaderWrap = Styled.div`
  #title {
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
    h2 {
    margin: 0px 0px 9px 18px;
    font-size: 20px;
    color: #F79C43;
    font-weight: bold;
  }
}
#circle1, #circle2 {
    margin: 22px 6px 0 22px;
    display: inline-block;
    width: 44px;
    height: 44px;
    background: none;
    border-radius: 50%;
    border: 2px solid #CABFC5;
    h2 {
      font-weight: bold;
      color: #859594;
      font-size: 23px;
      text-align: center;
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  #circle2 {
      margin-left: 0px;
  }
`;

const SignupHeader = () => {
  return (
    <SignupHeaderWrap>
      <div id="title">
        <img id="logo" src={logo} alt="logo" />
        <h2>회원가입</h2>
        <div id="line"></div>
      </div>
      <div id="circle-container">
        <div id="circle1">
          <h2>1</h2>
        </div>
        <div id="circle2">
          <h2>2</h2>
        </div>
      </div>
    </SignupHeaderWrap>
  );
};

export default SignupHeader;
