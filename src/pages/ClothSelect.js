import React, { useState } from 'react';
import Styled from 'styled-components';
import ClosetBar from '../components/closet/ClosetBar';
import ClosetBox from '../components/closet/ClosetBox';
import sample1 from '../assets/image/sample1.jpg';
import deleteIcon from '../assets/delete.svg';
import Modal from 'react-awesome-modal';
import { withRouter } from 'react-router-dom';

const ClothSelectWrap = Styled.div`
  width: 100vw;
  height: 150vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .box {
    height: 118vw;
    width: 90vw;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    row-gap: 10px;
    column-gap: 10px;
    overflow: scroll;
  }
  .button {
    width: 90vw;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    & > img{
      width: 40px;
    }
  }
  .submit {
    font-size: 20px;
    color: white;
    background-color: #F79C43;
    width: 70px;
    height: 40px;
    border-radius: 7px;
    border: none;
  }
  #completeState{
    width: 170px;
    height: 50px;
    font-weight: bold;
    margin-left: 65px;
    margin-top: 70px;
    text-align: center;
    font-size: 14px;
  }
  #okBtn{
    margin-left: 82px;
    margin-top: 28px;
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
`;

// SY: 여기서 옷 클릭할 때, 모달창 뜰 때, 확인 버튼 누를 때 id가 호출됨 (총 세 번 호출) --> useEffect?

const ClothSelect = ({ match }, props) => {
  const mode = match.path === '/closet/grid' ? 'closet' : '';
  const [selected, setSelected] = useState(null);
  console.log(selected);
  const imageList = [
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
  ];

  // SY: 모달 열고 닫는 함수
  const [isVisible, setVisible] = useState(props.visible);
  const openModal = () => {
    setVisible(true);
  }
  const closeModal = () => {
    setVisible(false);
  }
  // SY: 모달창 확인 버튼 클릭 시 페이지 이동 및 !서버! 함수 호출
  const goToRec = () => {
    // 함수 호출
    // SY: history.push?
    window.location.href = '/recommendation/result_selected';
  }
  return (
    <>
      <ClosetBar />
      <ClothSelectWrap>
        <div className="box">
          {imageList.map((image, index) => {
            return (
              <ClosetBox
                key={index}
                id={index}
                image={image}
                setSelected={setSelected}
                mode={mode}
              />
            );
          })}
        </div>
        <div className="button">
          {mode ? (
            <img src={deleteIcon} />
          ) : (
            <button
              onClick={openModal}
              className="submit"
              style={{ backgroundColor: selected ? '#F79C43' : 'gray' }}
            >
              선택
            </button>
          )}
          <Modal visible={isVisible} width="300" height="244" effect="fadeInUp" onClick={closeModal}>
            <div id='completeState'>옷 선택이 완료되었습니다.</div>
            <input type='button' className='btn' id='okBtn' value='확인' onClick={() => {closeModal(); goToRec();}} ></input>
          </Modal>
        </div>
      </ClothSelectWrap>
    </>
  );
};

export default withRouter(ClothSelect);
