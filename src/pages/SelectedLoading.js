/* eslint-disable no-unused-vars */
import React from 'react';
import { useHistory, location } from 'react-router';
import Styled from 'styled-components';
import cloth from '../assets/loading/cloth.svg';
import circle from '../assets/loading/circle.svg';

const SelectedLoadingWrap = Styled.div`
  .loadingContainer{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #circle{
    margin-top: 202px;
  }
  #cloth{
    margin-top: 202px;
    margin-left: -111px;
  }
  #loadingState{
    margin-top: 20px;
    color: #859594;
    font-weight: bold;
    margin-left: 10px;
  }
`;

const SelectedLoading = () => {
  // SY: 여기서 옷 추천 함수 호출하고 --> RandomRecResult에서 함수 결과 리턴받아야 함 !서버! 연결, 결과 리턴받을 때 웹크롤링 여부까지 같이 받기 default는 webcrawl = false
  const history = useHistory();
  setTimeout(() => {
    history.push('/recommendation/result_selected');
    // SY: Functions are not valid as a React child 에러 고치기 위해 빈 태그 return
    return <></>;
  }, 10000);
  return (
    <SelectedLoadingWrap>
      <div className='loadingContainer'>
        <img id='circle' src={circle}></img>
        <img id='cloth' src={cloth}></img>
      </div>
      <div id='loadingState' className='loadingContainer'>결과를 불러오는 중입니다...</div>
    </SelectedLoadingWrap>
  );
};

export default SelectedLoading;