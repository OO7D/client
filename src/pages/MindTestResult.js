/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Styled from 'styled-components';
import brandImg from 'assets/mindTestResult/brand.svg';

const MindTestResultWrap = Styled.div`
  #mindTestResultContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #statement{
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    width: 230px;
    height: 16px;
    margin-top: 51px;
    margin-bottom: 35px;
  }
  #imgContainer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  #outerBox{
    width: 260px;
    height: 360px;
    border: 1px solid #859594;
    background: #859594;
    border-radius: 7%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #brandImg{
    width: 200px;
    height: 200px;
    border-radius: 5%;
  }
  #brandName{
    width: 200px;
    height: 60px;
    color: white;
    font-weight: bold;
    font-size: 50px;
    text-align: center;
    margin-top: 20px;
  }
  #advertisement{
    margin-top: 50px;
    width: 200px;
    height: 16px;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
  }
  #btn{
    width: 130px;
    height: 50px;
    background-color: #F79C43;
    font-size: 14px;
    color: white;
    border-radius: 7px;
    border: 1px solid #F79C43;
    font-weight: bold;
    margin-top: 22px;
  }
  #btn: focus {
    outline: none;
    border: none;
  }
`;

const MindTestResult = props => {
  const history = useHistory();
  function goToMain() {
    history.push('/');
    return <></>;
  }
  return (
    <MindTestResultWrap>
      <div id='mindTestResultContainer'>
        <div id='statement'>당신에게 어울리는 패션브랜드는</div>
        <div id='imgContainer'>
          {/* SY: 바깥 박스(전체 박스) */}
          <div id='outerBox'>
            <img id='brandImg' src={brandImg}></img>
            <div id='brandName'>GUCCI</div>
          </div>
        </div>
        <div id='advertisement'>오늘의 패션을 추천받고 싶다면?</div>
        <a href='/'>
          <input type='button' id='btn' value='OO7D 바로가기' 
          // SY: 마지막 이미지 전까지 '평가해 주세요' 버튼 클릭 시 다음 이미지로 넘어감
          ></input>
        </a>
      </div>
    </MindTestResultWrap>
  );
};

export default MindTestResult;