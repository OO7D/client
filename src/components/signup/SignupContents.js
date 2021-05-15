import React, { useState } from 'react';
import Styled from 'styled-components';
import SignupHeader from './SignupHeader';

const SignupContentsWrap = Styled.div`
  * {
      color: #859594;
  }
  #circle1 {
    background-color: #CABFC5;
  }
  #box-title {
    margin: 26px 0 0 34px;
    h2 {
      font-size: 20px;
      font-weight: bold;
    }
  }
  #box-container {
      margin-bottom: 54px;
  }
  #box-container2 {
      margin-bottom: 27px;
  }
  #box-subtitle1 {
      margin: 24px 0 9px 0;
      font-size: 20px;
      text-align: center;
      #requirements {
          color: #F79C43;
      }
  }
  input[type='text'] {
    display: block;
    margin: 0 auto;
    width: 242px;
    height: 73px;
    border: 1px solid #000000;
    }
  #box-subtitle2 {
      margin-top: 13px;
      text-align: center;
      font-size: 20px;
      input[id='check'], input[id='check2'] {
          display: none;
          + label {
            font-weight: normal;
            vertical-align: -6px;
            margin-right: 8px;
            border: 1px solid #CABFC5;
            width: 15px;
            height: 15px;
        }
        :checked + label {
            background-color: #666666;
        }
      }
    }
    #description {
        color: #000000;
        text-align: center;
        font-size: 14px;
        margin-bottom: 18px;
    }
`;

const ButtonWrap = Styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

const Button = Styled.button`
  display: flex;
  width: 156px;
  height: 54px;
  background-color: #859594;
  outline: none;
  border: none;
  box-shadow: 0px 0px 3px 0px #859594;
  h2 {
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 23px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SignupContents = () => {
  return (
    <>
      <SignupContentsWrap>
        <SignupHeader />
        <div id="box-title">
          <h2>1. 약관 확인</h2>
        </div>
        <div id="box-container">
          <div id="box-subtitle1">
            <span>사이트 이용약관동의</span>
            <span id="requirements">(필수)</span>
          </div>
          <input type="text" readOnly={true} />
          <div id="box-subtitle2">
            <input type="checkbox" id="check"></input>
            <label id="check" htmlFor="check"></label>
            <span>동의합니다</span>
          </div>
        </div>
        <div id="box-container2">
          <div id="box-subtitle1">
            <span>개인정보 이용 및 수집 동의</span>
            <span id="requirements">(필수)</span>
          </div>
          <input type="text" readOnly={true} />
          <div id="box-subtitle2">
            <input type="checkbox" id="check"></input>
            <label id="check" htmlFor="check"></label>
            <span>동의합니다</span>
          </div>
        </div>
        <div id="description">앗! 필수 동의 항목에 동의하지 않으셨어요!</div>
        <ButtonWrap>
          <Button>
            <h2>취소</h2>
          </Button>
          <Button style={{ backgroundColor: '#F79C43' }}>
            <h2>확인</h2>
          </Button>
        </ButtonWrap>
      </SignupContentsWrap>
    </>
  );
};

export default SignupContents;
