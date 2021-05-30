/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import RatingBar from 'components/recResult/RatingBar';
import Styled from 'styled-components';

const PreferenceTestWrap = Styled.div`
  #preferenceTestContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .preferenceTestImgs{
    width: 184px;
    height: 292px;
  }
`;

const PreferenceTest = () => {
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

  // SY: ratingBar 초기값 5점 만점에 5점으로 지정

  console.log(selectedCloth);
  return (
    <PreferenceTestWrap>
      <div id='preferenceTestContainer'>
        <div>화면의 코디에 대해 평가해 주세요!</div>
        <img className='preferenceTestImgs' src={womanImgs[selectedCloth].default}></img>
        <RatingBar></RatingBar>
        <input type='button' value='평가해 주세요' 
        // SY: 마지막 이미지 전까지 '평가해 주세요' 버튼 클릭 시 다음 이미지로 넘어감
        onClick={()=>{
          if (selectedCloth < 9) {
            setSelectedCloth(selectedCloth+1); 
            console.log(selectedCloth);
          }}}></input>
      </div>
    </PreferenceTestWrap>
  );
};

export default PreferenceTest;