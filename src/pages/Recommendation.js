/* eslint-disable no-unused-vars */
import React from 'react';
import Styled from 'styled-components';
import Button from '../components/recommendation/Button';
import Cloth from '../assets/recommendation/cloth.svg';
import QuestionMark from '../assets/recommendation/questionMark.svg';

const RecommendationWrap = Styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #title {
    margin-top: 174px;
    width: 250px;
    height: 25px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  #buttonContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
  }
  #dontKnow{
    width: 130px;
    height: 31px;
    color: #859594;
    font-size: 14px;
    text-align: center;
    margin-top: 42px;
    font-weight: bold;
  }
  #style{
    width: 100vw;
  }
`;

const Recommendation = () => {
  return (
    <RecommendationWrap>
      <div className='container'>
        <div id='title'>옷 추천을 도와드릴까요?</div>
      </div>
      <div id='buttonContainer'>
        <a href='/recommendation/loading_selected'>
          <Button id='btn1' text='옷장에서 옷 고르기' svg={Cloth}></Button>
        </a>
        <a href='/recommendation/loading_random'>
          <Button id='btn2' text='랜덤으로 추천받기' svg={QuestionMark}></Button>
        </a>        
      </div>
    </RecommendationWrap>
  );
};

export default Recommendation;