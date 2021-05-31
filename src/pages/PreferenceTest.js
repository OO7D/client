/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import RatingBar from 'components/recResult/RatingBar';
import toLeft from 'assets/preferenceTest/toLeft.svg';
import toRight from 'assets/preferenceTest/toRight.svg';
import Styled from 'styled-components';

const PreferenceTestWrap = Styled.div`
  #preferenceTestContainer{
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
    width: 224px;
    height: 330px;
    border: 1px solid #C4C4C4;
    background: #C4C4C4;
    border-radius: 7%;
  }
  #innerBox{
    width: 184px;
    height: 292px;
    border: 1px solid white;
    background: white;
    border-radius: 5%;
    margin: 19px;
  }
  #cloth{
    width: 184px;
    height: 292px;
    border-radius: 5%;
  }
  #clothOrder{
    margin-bottom: 35px;
  }
`;

const PreferenceTest = () => {
  // SY: !서버! 혹은 !DB!에서 데이터 받아와서 남자인지 여자인지 파악하고 그에 따라 함수 실행

  // SY: 화면에 나타나는 이미지가 몇 번째 이미지인지 파악할 수 있도록 하는 변수 선언
  let [selectedCloth, setSelectedCloth] = useState(0);

  // SY: preferenceTest/woman_cloth 이미지 가져오기
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('assets/preferenceTest/woman_cloth', false, /\.png/));

  // SY: 회원이 여성일 경우 화면에 보여줄 옷의 src를 배열에 담기
  const womanImgs = [];
  let i;
  for (i=0; i<10; i++){
    womanImgs[i] = images['woman_cloth' + (i+1) + '.png'];
  }

// SY: 화면에 나타난 옷의 순서에서 +1을 하는 함수
  function plusNumber() {
    if (selectedCloth < 9) {
      setSelectedCloth(selectedCloth+1); 
      console.log(selectedCloth+1);
    }
  }

  // SY: 화면에 나타난 옷의 순서에서 -1을 하는 함수
  function minusNumber(){
    if (selectedCloth > 0) {
      setSelectedCloth(selectedCloth-1); 
      console.log(selectedCloth-1);
    }
  }

  return (
    <PreferenceTestWrap>
      <div id='preferenceTestContainer'>
        <div id='statement'>화면의 코디에 대해 평가해 주세요!</div>
        <div id='imgContainer'>
          <img src={toLeft} onClick={minusNumber}></img>
          {/* SY: 바깥 박스(전체 박스) */}
          <div id='outerBox'>
            {/* SY: 옷을 감싸는 박스 */}
            <div id='innerBox'>
              <img id='cloth' src={womanImgs[selectedCloth].default}></img>
            </div>
          </div>
          <img src={toRight} onClick={plusNumber}></img>
        </div>
        <div id='clothOrder'>{selectedCloth+1}/10</div>
        <RatingBar></RatingBar>
        {/* ratingBar를 여기로 가져오자. 그리고 value에다가 _value라고 해서 값을 계속해서 주자. */}
        <input type='button' value='평가해 주세요' 
        // SY: 마지막 이미지 전까지 '평가해 주세요' 버튼 클릭 시 다음 이미지로 넘어감
        onClick={plusNumber}></input>
      </div>
    </PreferenceTestWrap>
  );
};

export default PreferenceTest;