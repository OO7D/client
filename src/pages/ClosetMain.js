import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import Button from '../components/closet/Button';

const ClosetMainWrap = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 48px;
  }
  .buttons {
    width: 85vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const ClosetMain = ({ history }) => {
  return (
    <ClosetMainWrap>
      <div className="title">상민님, 오늘은 OOO 어떠세요?</div>
      <div className="buttons">
        <Button
          text={'옷장 보기'}
          onClickFunc={() => history.push('/closet/grid')}
        />
        <Button text={'새 옷 추가하기'} />
      </div>
    </ClosetMainWrap>
  );
};

ClosetMain.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ClosetMain);
