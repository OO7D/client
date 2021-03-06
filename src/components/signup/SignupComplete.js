import React from 'react';
import Styled from 'styled-components';
import check from '../../assets/check.svg';
import Welcome from '../main/Welcome';
import { Route, Link, Switch } from 'react-router-dom';
import TestSample from '../test/TestSample';

const SignupCompleteWrap = Styled.div`
      @charset "UTF-8";
      /* mobile style */

      * {
        box-sizing: border-box;
        -webkit-text-size-adjust: none;
      }

      body,
      form,
      div,
      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      fieldset,
      th,
      td,
      input,
      textarea,
      select {
        margin: 0;
        padding: 0;
        font-family: 'Malgun Gothic', '맑은 고딕', dotum, '돋움', sans-serif;
        font-weight: normal;
      }
      body {
        -webkit-user-select: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      li {
        list-style: none;
      }
      a {
        text-decoration: none;
      }
      a[href^='tel'] {
        font-style: normal;
      }
      address,
      caption,
      em,
      var {
        font-style: normal;
        font-weight: normal;
      }
      input,
      textarea,
      select {
        letter-spacing: normal;
      }
      ol,
      ul,
      dl {
        list-style: none;
      }
      fieldset,
      img {
        border: 0;
      }
      legend,
      caption {
        display: none;
      }
      img {
        border: 0;
        vertical-align: top;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      br {
        letter-spacing: normal;
      }
      p {
        letter-spacing: normal;
      }
      input {
        vertical-align: middle;
      }
      input[type='text'],
      input[type='password'] {
        -webkit-appearance: none;
      }
      input[type='checkbox'] {
        -webkit-appearance: none;
        -webkit-border-radius: 0;
      }
      input:checked[type='checkbox'] {
        -webkit-appearance: checkbox;
      }
      input[type='radio'] {
        border: none;
        -webkit-appearance: none;
      }
      button,
      input[type='button'],
      input[type='submit'],
      input[type='reset'],
      input[type='file'] {
        -webkit-appearance: button;
        border-radius: 0;
      }
      textarea {
        -webkit-appearance: none;
      }
      select {
        -webkit-appearance: menulist-text;
      }
      html {
        width: 375px;
        height: 812px;
      }
      body {
        color: #c5c5c5;
      }
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
            <Button>
              <Link to="/test">
                <h2>선호도 테스트 하러 가기</h2>
              </Link>
            </Button>
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
