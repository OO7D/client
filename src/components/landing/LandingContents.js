import React, { useHistory } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import camera from '../../assets/camera.svg';
import closet from '../../assets/closet.svg';
import brand from '../../assets/brand.svg';
import KakaoLogin from '../../lib/KakaoLogin';

const LandingContentsWrap = Styled.div`
  * {
      color: #859594;
  }
  #description-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 16px;
  }
  #icon, #icon2, #icon3 {
    width: 71px;
    height: 71px;
    border-radius: 50%;
    background-color: hsla(2, 88%, 76%, 0.986);
    #camera, #closet, #recommend {
        position: relative;
        top: 46%;
        left: 51%;
        transform: translate(-50%, -50%);
        width: 71px;
        height: 55px;
        width: auto 0;
        font-size: 45px;
        color: white;
    }
    #recommend {
        width: 56px;
        top: 55%;
    }
  }
  #icon2 {
    background-color: hsla(36, 96%, 70%, 0.986);
  }
  #icon3 {
    background-color: #90ddb2e5;
  }
  #icon-description {
    width: 190px;
    margin-left: 25px;
  }
  #line1 {
    text-shadow: 0.2px 0.2px white, -0.2px -0.2px #444;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
  }
  #landing-title {
      font-size: 20px;
      margin-left: 70px;
      margin-bottom: 40px;
      font-weight: 800;
      #ai {
          color: #F79C43;
      }
      #sub {
          margin-left: 60px;
          font-weight: 800;
      }
  }
  #brand-description {
    margin-top: 29px;
    #brand-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 16px;
      img {
        margin: 0 5px 21px 5px;
        height: 106px;
      }
    }
    #ps {
        font-size: 15px;
        margin-top: 16px;
        text-align: center;
        font-weight: bold;
    }
  }
  #start {
    text-align: center;
    margin: 46px 0 47px 0;
    font-size: 33px;
    h2, #sub {
      color: black;
      font-weight: 800;
    }
    h2 {
        margin: 0 100px 0 0;
    }
    #sub {
        margin-left: 30px;
    }
  }
  #login {
    h2 {
      text-align: center;
      font-size: 23px;
      font-weight: bold
    }
  }
  #login-button {
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
`;

const Button = Styled.button`
  display: block;
  margin: 0 auto;
  width: 227px;
  height: 36px;
  background: transparent;
  outline: none;
  border: 2px solid #F79C43;
  box-shadow: 0px 1px 3px 1px #859594;
  h2 {
    text-align: center;
    color: #F79C43;
    font-weight: bold;
    font-size: 20px;
  }
`;

const LandingContents = () => {
  return (
    <div>
      <LandingContentsWrap>
        <div id="landing-title">
          <span id="ai">AI</span>
          <span>가 당신의 옷장에서</span>
          <div id="sub">옷을 추천해드립니다</div>
        </div>
        <div id="description-container">
          <div id="icon">
            <img id="camera" src={camera} alt="camera" />
          </div>
          <div id="icon-description">
            <div id="line1">
              찰칵!
              <br />
              <span style={{ color: '#F79C43' }}>당신의 옷</span>을{' '}
              <span style={{ color: '#F79C43' }}>등록</span>하세요!
            </div>
          </div>
        </div>
        <div id="description-container">
          <div id="icon2">
            <img id="closet" src={closet} alt="closet" />
          </div>
          <div id="icon-description">
            <div id="line1">
              등록한 옷은 <span style={{ color: '#F79C43' }}>옷장</span>에서
              <br />
              <span style={{ color: '#F79C43' }}>확인</span>할 수 있어요!
            </div>
          </div>
        </div>
        <div id="description-container">
          <div id="icon3">
            <i id="recommend" className="fas fa-tshirt"></i>
          </div>
          <div id="icon-description">
            <div id="line1">
              등록한 옷을 기반으로
              <br />
              <span style={{ color: '#F79C43' }}>옷 추천</span>을 받아보세요!
            </div>
          </div>
        </div>
        <div id="brand-description">
          <div id="line1">
            <span style={{ color: '#F79C43' }}>당신</span>에게 어울리는{' '}
            <span style={{ color: '#F79C43' }}>패션 브랜드</span>는?
          </div>
          <div id="brand-container">
            <img id="brand" src={brand} alt="brand" />
            <img id="brand" src={brand} alt="brand" />
            <img id="brand" src={brand} alt="brand" />
          </div>
          <Link to="/test">
            <Button>
              <h2>심리테스트 하러 가기</h2>
            </Button>
          </Link>
          <div id="ps">* 로그인 하지 않아도 이용하실 수 있습니다.</div>
          <div id="start">
            <h2>지금</h2>
            <div id="sub">시작하세요</div>
          </div>
          <div id="login">
            <h2>간편 로그인</h2>
            <div id="login-button">
              {/* <div className="g-signin2" data-onsuccess="onSignIn"></div> */}
              <KakaoLogin />
            </div>
          </div>
        </div>
      </LandingContentsWrap>
    </div>
  );
};

export default LandingContents;
