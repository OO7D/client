import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import Button from '../components/closet/Button';
import shirt from '../assets/shirt.png';
import question from '../assets/question.png';
import camera from '../assets/camera.svg';

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

const ClosetMain = ({ history, match, pic, setPic }) => {
  const mode = match.path === '/closet' ? 'main' : '';

  const handleChangeFile = event => {
    let reader = new FileReader();
    const data = event.target.files[0];

    if (data) {
      reader.readAsDataURL(data);
    }

    reader.onloadend = () => {
      setPic({
        file: data,
        preview: reader.result,
      });
      history.push('/closet/new');
    };
  };

  return (
    <ClosetMainWrap>
      <div className="title">
        {mode ? '상민님, 오늘은 OOO 어떠세요?' : '옷 추천을 도와드릴까요?'}
      </div>
      <div className="buttons">
        {mode ? (
          <Button
            text={'옷장 보기'}
            onClickFunc={() => history.push('/closet/grid')}
            image={shirt}
          />
        ) : (
          <Button
            text={'옷장에서 옷 고르기'}
            onClickFunc={() => history.push('/recommend/grid')}
            image={shirt}
            size="15px"
          />
        )}
        {mode ? (
          <Button
            text={'새 옷 추가하기'}
            handleChangeFile={handleChangeFile}
            // onClick={'onclick=document.all.file.click()'}
            image={camera}
          />
        ) : (
          <Button text={'랜덤으로 추천받기'} size="15px" image={question} />
        )}
      </div>
    </ClosetMainWrap>
  );
};

ClosetMain.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ClosetMain);
