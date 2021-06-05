/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import question1 from 'assets/mindTest/question1.svg';
import Modal from 'react-awesome-modal';
import { useHistory } from 'react-router';
import Styled from 'styled-components';

const MindtestWrap = Styled.div`
  #mindTestContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #statement{
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    width: 230px;
    height: 16px;
    margin-top: 51px;
    margin-bottom: 35px;
  }
  #questionImg{
    width: 261px;
    height: 191px;
  }
  #answers{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
  }
  .answers{
    margin-top:17px;
    width: 231px;
    height: 43px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    border-radius: 7px;
    border: 1px solid #CABFC5;
  }
  #btn1{
    background: #CABFC5;
  }
  #btn2{
    background: #CABFC5;
  }
  #btn3{
    background: #CABFC5;
  }
  #btn4{
    background: #CABFC5;
  }
  #btn{
    width: 130px;
    height: 50px;
    background-color: #859594;
    font-size: 14px;
    color: white;
    border-radius: 7px;
    border: 1px solid #859594;
    font-weight: bold;
    margin-top: 22px;
  }
  #btn: focus {
    outline: none;
    border: none;
  }
  #modalContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  #completeState{
    margin-top: 70px;
    margin-bottom: -30px;
  }
  .completeState{
    width: 170px;
    height: 50px;
    font-weight: bold;
    text-align: center;
    font-size: 14px;
  }
  #okBtn{
    margin-top: 10px;
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
`;

const MindTest = props => {
  // SY: 화면에 나타나는 이미지가 몇 번째 이미지인지 파악할 수 있도록 하는 변수 선언
  let [selectedQuestion, setSelectedQuestion] = useState(0);
  // SY: 1번, 2번, 3번, 4번 질문에 따라 나타날 질문과 답안, 이미지들
  const questions = [
      {question: 'Q1. 1번 질문입니다.'},
      {question: 'Q2. 2번 질문입니다.'},
      {question: 'Q3. 3번 질문입니다.'},
      {question: 'Q4. 4번 질문입니다.'}
  ];
  const answers = [
      {answer: ['1번의 1번 답입니다.', '1번의 2번 답입니다.', '1번의 3번 답입니다.', '1번의 4번 답입니다.']},
      {answer: ['2번의 1번 답입니다.', '2번의 2번 답입니다.', '2번의 3번 답입니다.', '2번의 4번 답입니다.']},
      {answer: ['3번의 1번 답입니다.', '3번의 2번 답입니다.', '3번의 3번 답입니다.', '3번의 4번 답입니다.']},
      {answer: ['4번의 1번 답입니다.', '4번의 2번 답입니다.', '4번의 3번 답입니다.', '4번의 4번 답입니다.']}
  ];
  const images = [
      {src: {question1}},
      {src: {question1}},
      {src: {question1}},
      {src: {question1}}
  ]

// SY: 화면에 나타난 옷의 순서에서 +1을 하는 함수
  function plusNumber() {
    if (selectedQuestion < 3) {
      setSelectedQuestion(selectedQuestion+1);
    }
  }

  // SY: 모달 열고 닫는 함수
  const [isVisible, setVisible] = useState(props.visible);
  const openModal = () => {
    setVisible(true);
  }
  const closeModal = () => {
    setVisible(false);
  }

  // SY: 심리 테스트 결과 페이지로 이동하는 함수
  const history = useHistory();
  function goToRec() {
    history.push('/mind_test/result');
    return <></>;
  }

  const [_value, setValue] = useState([]);
  // SY: 배열에 점수를 넣기 위한 변수 temp
  const [temp, setTemp] = useState(1);

  function update() {
    // SY: 선택한 답안의 번호를 저장하는 배열 복사 및 추가
    let newArray = [..._value, Number(temp)];
    // SY: 새로운 배열의 값으로 기존의 배열 update
    setValue(newArray);
    if (selectedQuestion === 3){
      // 마지막 이미지면 모달 나타나게 함
      openModal();
    }
    else
      // SY: 확인 버튼 누를 시 다음 질문으로 넘어가며 버튼 배경색 회색으로 변경
      changeColorToGray(0);
  }

  // SY: 심리테스트 답안을 바꿀 때 실행되는 배경색 변경 함수
  function changeColorToGray(value) {
    // 버튼 색 초기화
    if (value === 0){
      for(let i=1;i<5;i++){
        document.getElementById('btn' + i).style.background = '#CABFC5';
      }
      return <></>;
    }
    for(let i=1;i<5;i++){
      document.getElementById('btn' + i).style.background = '#CABFC5';
    }
    // SY: 이렇게 하면 더블클릭 문제는 해결되지만 뒤로 못 돌아감
    // tmp = value;
    // document.getElementById('btn' + tmp).style.background = '#F79C43';
    document.getElementById('btn' + value).style.background = '#F79C43';
    setTemp(value);
  }

  return (
    <MindtestWrap>
      <div id='mindTestContainer'>
        <div id='statement'>{questions[selectedQuestion].question}</div>
        <div id='imgContainer'>
          {/* SY: 이미지와 답안, 버튼을 감싸는 div 태그 */}
          <img id='questionImg' src={images[selectedQuestion].src.question1}></img>
        </div>
        <div id='answers'>
          <input type='button' id='btn1' className='answers' value={answers[selectedQuestion].answer[0]} onClick={()=>changeColorToGray(1)}></input>           
          <input type='button' id='btn2' className='answers' value={answers[selectedQuestion].answer[1]} onClick={()=>changeColorToGray(2)}></input>           
          <input type='button' id='btn3' className='answers' value={answers[selectedQuestion].answer[2]} onClick={()=>changeColorToGray(3)}></input>           
          <input type='button' id='btn4' className='answers' value={answers[selectedQuestion].answer[3]} onClick={()=>changeColorToGray(4)}></input>           
        </div>
        <input type='button' id='btn' value='확인' 
        // SY: 마지막 이미지 전까지 '확인' 버튼 클릭 시 다음 이미지로 넘어감
        onClick={() => {update(); plusNumber();}}></input>
        <Modal visible={isVisible} width="300" height="244" effect="fadeInUp" onClick={closeModal}>
          <div id='modalContainer'>
            <div id='completeState' className='completeState'>심리 테스트가</div>
            <div className='completeState'>완료되었습니다.</div>
            <input type='button' className='btn' id='okBtn' value='확인' onClick={() => {console.log({_value}); closeModal(); goToRec();}} ></input>
          </div>
        </Modal>
      </div>
    </MindtestWrap>
  );
};

export default MindTest;