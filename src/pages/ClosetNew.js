import React from 'react';
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

const ClosetNew = ({ history }) => {
  return (
    <ClosetNewWrap>
      <div className="text">거의 다 됐어요!</div>
      <NewBox />
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
