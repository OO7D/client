import React, { useState } from 'react';
import Modal from 'react-awesome-modal';
import Styled from 'styled-components';
import Sns from './Sns';

const MakeModalWrap = Styled.div`
  #container{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn{
    width: 130px;
    height: 50px;
    background-color: #CABFC5;
    font-size: 14px;
    color: white;
    border-radius: 7px;
    border: 1px solid #CABFC5;
    font-weight: bold;
  }
  .btn:focus {
    border: none;
    outline: none;
  }
  #ratingBtn{
    margin-top: 37px;
  }
  #afterScore{
    width: 150px;
    height: 50px;
    font-weight: bold;
    margin-left: 75px;
    margin-top: 70px;
    text-align: center;
    font-size: 14px;
  }
  #okBtn{
    margin-left: 82px;
    margin-top: 28px;
  }
`;

const MakeModal = props => {
  const [isVisible, setVisible] = useState(props.visible);
  const recMode = useState(props.recMethod)[0];
  const openModal = () => {
    setVisible(true);
  }
  const closeModal = () => {
    setVisible(false);
  }
  const [mode, setMode] = useState(props.mode);
  if (mode === 'original')
    return (
      <MakeModalWrap>
        <div id='container'>
          {/* SY: ratingBar 밑에 나타날 확인 버튼 --> 여기서 onClick에 !서버!로 데이터 전송 함수 추가 */}
          <input type='button' className='btn' id='ratingBtn' value="평가해 주세요" onClick={openModal}></input>
          {/* SY: 모달 창, 여기서 확인 버튼을 누르면 original에서 changed로 모드 변경 */}
          <Modal visible={isVisible} width="300" height="244" effect="fadeInUp" onClick={closeModal}>
            <div id='afterScore'>평가가 완료되었습니다.</div>
            <input type='button' className='btn' id='okBtn' value='확인' onClick={() => {setMode('changed'); closeModal();}} ></input>
          </Modal>
        </div>
      </MakeModalWrap>
    );
  else if (mode === 'changed'){
    // SY: ratingBar 부분 HTML 공백으로 변경하고 Sns 공유 기능 보이게 함
    const ratingBar = document.getElementById('ratingBar');
    ratingBar.innerHTML = '';
    return (
      <Sns recMode={recMode}></Sns>
    );
  }
};

export default MakeModal;
