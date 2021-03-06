import React, { useHistory } from 'react';
import Styled from 'styled-components';
import camera from '../../assets/camera.svg';
import closet from '../../assets/closet.svg';
import brand from '../../assets/brand.svg';
import Balenciaga from '../../assets/Balenciaga.jpeg';
import LV from '../../assets/LV.jpeg';
import KakaoLogin from '../../lib/KakaoLogin';
import { withRouter, Link } from 'react-router-dom';

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
  #line1, #line2 {
    text-shadow: 0.2px 0.2px white, -0.2px -0.2px #444;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
  }
  #line1 {
    width: 200px;
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
    h3, #sub {
      color: black;
      font-weight: 800;
    }
    h3 {
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
          <span>??? ????????? ????????????</span>
          <div id="sub">?????? ?????????????????????</div>
        </div>
        <div id="description-container">
          <div id="icon">
            <img id="camera" src={camera} alt="camera" />
          </div>
          <div id="icon-description">
            <div id="line1">
              ??????!
              <br />
              <span style={{ color: '#F79C43' }}>????????? ???</span>???{' '}
              <span style={{ color: '#F79C43' }}>??????</span>?????????!
            </div>
          </div>
        </div>
        <div id="description-container">
          <div id="icon2">
            <img id="closet" src={closet} alt="closet" />
          </div>
          <div id="icon-description">
            <div id="line1">
              ????????? ?????? <span style={{ color: '#F79C43' }}>??????</span>??????
              <br />
              <span style={{ color: '#F79C43' }}>??????</span>??? ??? ?????????!
            </div>
          </div>
        </div>
        <div id="description-container">
          <div id="icon3">
            <i id="recommend" className="fas fa-tshirt"></i>
          </div>
          <div id="icon-description">
            <div id="line1">
              ????????? ?????? ????????????
              <br />
              <span style={{ color: '#F79C43' }}>??? ??????</span>??? ???????????????!
            </div>
          </div>
        </div>
        <div id="brand-description">
          <div id="line2">
            <span style={{ color: '#F79C43' }}>??????</span>?????? ????????????{' '}
            <span style={{ color: '#F79C43' }}>?????? ?????????</span>????
          </div>
          <div id="brand-container">
            <img id="brand" src={brand} alt="brand" />
            <img id="brand" src={Balenciaga} alt="Balenciaga" />
            <img id="brand" src={LV} alt="LV" />
          </div>
          <Link to="/mind_test">
            <Button>
              <h2>??????????????? ?????? ??????</h2>
            </Button>
          </Link>
          <div id="ps">* ????????? ?????? ????????? ???????????? ??? ????????????.</div>
          <div id="start">
            <h3>??????</h3>
            <div id="sub">???????????????</div>
          </div>
          <div id="login">
            <h2>?????? ?????????</h2>
            <div id="login-button">
              <KakaoLogin />
            </div>
          </div>
        </div>
      </LandingContentsWrap>
    </div>
  );
};

export default withRouter(LandingContents);
