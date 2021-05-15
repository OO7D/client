import React from 'react';
import Styled from 'styled-components';
import camera from '../../assets/camera.svg';
import closet from '../../assets/closet.svg';
import pretest from '../../assets/pretest.svg';

const ContentsWrap = Styled.div`
  #contents-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 55px;
    #icon, #icon2, #icon3, #icon4, #icon5, #icon6 {
      margin-left: 23px;
      margin-right: 23px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: hsla(2, 88%, 76%, 0.986);
      h2 {
        color: #859594;
        font-size: 19px;
        margin-top: 40px;
      }
      #camera, #closet, #mindTest, #recommend, #myPage, #pretest {
        position: relative;
        top: 46%;
        left: 51%;
        transform: translate(-50%, -50%);
        width: 80px;
        height: 64px;
        width: auto 0;
        font-size: 60px;
        color: white;
      }
      #recommend, #mindTest, #myPage {
        top: 48%;
        width: 50px;
      }
      #recommend, #pretest {
        top: 52%;
        width: 77px;
      }
      #myPage {
        width: 55px;
      }
    }
  #icon2 {
    background-color: hsla(36, 96%, 70%, 0.986);
  }
  #icon3 {
    background-color: #f0e15a;
  }
  #icon4 {
    background-color: #90dbb2e5;
  }
  #icon5 {
    background-color: #aad6f3e0;
  }
  #icon6 {
    background-color: #b7aaf3e0;
  }
}
  h2 {
    font-weight: bold;
    text-align: center;
    margin: 56px 0 35px 0;
    font-size: 23px;
    color: black;
  }
`;

const MainContents = () => {
  return (
    <ContentsWrap>
      <h2>메인 메뉴</h2>
      <div id="contents-container">
        <div id="icon">
          <img id="camera" src={camera} alt="camera" />
          <h2>사진 인식</h2>
        </div>
        <div id="icon2">
          <img id="closet" src={closet} alt="closet" />
          <h2>옷장</h2>
        </div>
      </div>
      <div id="contents-container">
        <div id="icon3">
          <i id="mindTest" className="fas fa-clipboard-list"></i>
          <h2>심리테스트</h2>
        </div>
        <div id="icon4">
          <i id="recommend" className="fas fa-tshirt"></i>
          <h2>옷 추천</h2>
        </div>
      </div>
      <div id="contents-container">
        <div id="icon5">
          <i id="myPage" className="fas fa-user"></i> <h2>마이페이지</h2>
        </div>
        <div id="icon6">
          <img id="pretest" src={pretest} alt="pretest" />
          <h2>선호도테스트</h2>
        </div>
      </div>
    </ContentsWrap>
  );
};

export default MainContents;
