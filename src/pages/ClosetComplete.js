import React from 'react';
import check from '../assets/check.png';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import PhotoUpload from '../components/closet/PhotoUpload';

const ClosetCompleteWrap = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .circle {
    margin-top: 172px;
    width: 140px;
    height: 140px;
    border-radius: 70px;
    box-sizing: border-box;
    border: 3px solid #CABFC5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 59px;
    height: 59px;
  }

  .text {
    color: #859594;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin: 46px 0;
  }

  button {
    width: 210px;
    height: 48px;
    background-color: #F79C43;
    color: white;
    border: none;
    font-size: 20px;
    font-weight: bold;
    border-radius: 7px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
    margin-bottom: 18px;
  }
`;

const ClosetComplete = ({ setPic, history }) => {
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
    <ClosetCompleteWrap>
      <div className="circle">
        <img src={check} alt="" />
      </div>
      <div className="text">
        추가되었습니다!
        <br />
        <br />
        옷장으로 이동할까요?
      </div>
      <button className="closet" onClick={() => history.push('/closet/grid')}>
        옷장으로 가기
      </button>
      <button className="replay">
        <PhotoUpload onChangeFunc={handleChangeFile} />
        하나 더 추가하기
      </button>
    </ClosetCompleteWrap>
  );
};

export default withRouter(ClosetComplete);
