import React from 'react';
import Styled from 'styled-components';
import heart from '../../assets/heart-black.svg';
import blouse from '../../assets/blouse.svg';
import pants from '../../assets/pants.svg';
import filled from '../../assets/small-heart-filled.svg';
import empty from '../../assets/small-heart-empty.svg';

const CardWrap = Styled.div`
  #heart {
    width: 34px;
    height: 27px;
    margin: auto 0;
  }
  #blouse, #pants {
    position: absolute;
    height: 132px;
  }
  #pants {
      display: inline-block;
      margin: 0 auto;
  }
  #heart-filled, #heart-empty {
      margin: 5px 6px 0 0 ;
      width: 16px;
      height: 14px;
      float: right;
      z-index: 1;
      position: relative;
  }
  #card-container {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 70px;
    margin-bottom: 28px;
  }
  #card1, #card2 {
    display: inline-flex;
    justify-content: center;
    width: 143px;
    height: 217px;
    background-color: #C4C4C4;
    border-radius: 10px;
  }
  #image {
        border-radius: 10px;
        background-color: white;
        width: 132px;
        height: 132px;
        margin: 5px 5px 7px 5px;
    }

  #card1-1, #card2-1 {
    h2 {
      color: black;
      font-size: 12px;
      font-weight: bold;
      text-align: center;
    }
    #line {
        background-color: #FFFFFF;
        margin: 2px auto 10px auto;
        width: 103px;
        height: 1px;
    }
  }
  #image-description {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: black;
    #circle, #circle2 {
      margin: 6px 0px 0px 6px;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background-color: black;
      margin-right: 18px;
    }
    #circle2 {
        background-color: #6B390A;
    }
    #information {
      width: 80px;
      h2 {
        margin-top: 3px;
        text-align: left;
      }
    }
  }
`;

const LandingCard = () => {
  return (
    <CardWrap>
      <div id="card-container">
        <div id="card1">
          <div id="card1-1">
            <div id="image">
              <img id="blouse" src={blouse} alt="blouse" />
              <img id="heart-filled" src={filled} alt="filled" />
            </div>
            <h2>쉬폰 블라우스</h2>
            <div id="line"></div>
            <div id="image-description">
              <div id="circle"></div>
              <div id="information">
                <h2>
                  셔츠/블라우스
                  <br />
                  봄/가을
                </h2>
              </div>
            </div>
          </div>
        </div>
        <img id="heart" src={heart} alt="heart" />
        <div id="card2">
          <div id="card2-1">
            <div id="image">
              <img id="pants" src={pants} alt="pants" />
              <img id="heart-empty" src={empty} alt="emtpy" />
            </div>
            <h2>바지 3</h2>
            <div id="line"></div>
            <div id="image-description">
              <div id="circle2"></div>
              <div id="information">
                <h2>
                  바지
                  <br />
                  봄/가을
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardWrap>
  );
};

export default LandingCard;
