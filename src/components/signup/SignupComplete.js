import React from 'react';
import Styled from 'styled-components';
import check from '../../assets/check.svg';
import Welcome from '../main/Welcome';
import { Route, Link, Switch } from 'react-router-dom';
import TestSample from '../test/TestSample';

const SignupCompleteWrap = Styled.div`
  * {
      color: #859594;
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
  #circle2 {
    background-color: #CABFC5;
  }
  #box-title {
    margin: 26px 0 0 34px;
    h2 {
      font-size: 20px;
      font-weight: bold;
    }
  }
  img {
    height: 63px;
    display: flex;
    margin: 46px auto 23px auto;
  }

  #complete-title {
    margin-bottom: 16px;
    h2 {
    color: #000000;
    text-align: center;
    font-size: 26px;
    font-weight: bold;
    margin-left:
    }
  }
  #welcome {
    text-align: center;
    margin-bottom: 25px;
  }
  #complete-subtitle {
    margin-bottom: 58px;
  }

  #complete-description {
    display: block;
    margin: 0 auto;
    h2, h3 {
      text-align: center;
      font-weight: bold;
    }
    h2 {
      font-size: 23px;
      margin-bottom: 12px;
    }
    h3 {
      font-size: 20px;
      color: #CABFC5;
    }
  }

`;

const Button = Styled.button`
  display: block;
  margin: 0 auto;
  width: 300px;
  height: 56px;
  background: transparent;
  outline: none;
  border: 2px solid #F79C43;
  box-shadow: 0px 1px 3px 1px #859594;
  h2 {
    text-align: center;
    color: #F79C43;
    font-weight: bold;
    font-size: 23px;
  }
`;

const SignupComplete = () => {
  return (
    <>
      <SignupCompleteWrap>
        <div id="circle-container">
          <div id="circle1">
            <h2>1</h2>
          </div>
          <div id="circle2">
            <h2>2</h2>
          </div>
        </div>
        <div id="box-title">
          <h2>2. 가입 성공</h2>
        </div>
        <img src={check} alt="check" />
        <div id="complete">
          <div id="complete-title">
            <h2>가입 성공!</h2>
          </div>
          <div id="complete-subtitle">
            <Welcome />
            <Link to="/test">
              <Button>
                <h2>선호도 테스트 하러 가기</h2>
              </Button>
            </Link>
          </div>
          <div id="complete-description">
            <h2>선호도 테스트란?</h2>
            <h3>
              개인의 특성에 맞는 옷 추천을
              <br />
              제공하기 위해 필요한 정보를 조사합니다.
            </h3>
          </div>
        </div>
      </SignupCompleteWrap>
      <Switch>
        <Route exact path="/test" component={TestSample} />
      </Switch>
    </>
  );
};

export default SignupComplete;
