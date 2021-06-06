import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import NewBox from '../components/closet/NewBox';
import { withRouter } from 'react-router-dom';

const ClosetNewWrap = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .text {
    font-size: 25px;
    font-weight: bold;
    margin: 23px 0;
  }
  .buttons {
    width: 210px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 23px;
    & > button {
      width: 84px;
      height: 32px;
      border-radius: 7px;
      font-size: 14px;
      font-weight: bold;
      color: white;
      border: none;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
    }
    &__replay {
      background-color: #CABFC5;
    }
    &__submit {
      background-color: #F79C43;
    }
  }
`;

const ClosetNew = ({ clothes, setClothes, pic, history }) => {
  // useEffect(() => {
  //   // 서버 요청 코드
  //   setClothes({
  //     image: pic,
  //     title: '바지 1',
  //     colors: { white: 92, gray: 8 },
  //     type: '바지',
  //     weather: '봄/가을',
  //   });
  // }, []);

  return (
    <ClosetNewWrap>
      <div className="text">거의 다 됐어요!</div>
      <NewBox clothes={clothes} setClothes={setClothes} />
      <div className="buttons">
        <button
          className="buttons__replay"
          onClick={() => history.push('/closet')}
        >
          다시 하기
        </button>
        <button
          className="buttons__submit"
          onClick={() => history.push('/closet/complete')}
        >
          완료
        </button>
      </div>
    </ClosetNewWrap>
  );
};

export default withRouter(ClosetNew);
