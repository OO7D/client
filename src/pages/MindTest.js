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
    width: 350px;
    height: 20px;
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
    width: 350px;
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
  // SY: 1번, 2번, 3번, 4번, 5번, 6번 질문에 따라 나타날 질문과 답안, 이미지들
  const questions = [
      {question: 'Q1. 가고 싶은 해외여행지는?'},
      {question: 'Q2. 오랜만에 온 휴가를 어떻게 보낼 건가요?'},
      {question: 'Q3. 술 먹고 싶은 날, 당신의 행동은?'},
      {question: 'Q4. 데이트 장소로 선호하는 곳은?'},
      {question: 'Q5. 코로나가 끝나면 하고 싶은 것은?'},
      {question: 'Q6. 단톡방에 카톡 수백 개가 쌓였을 때 당신의 행동은?'}
  ];
  const answers = [
      {answer: ['프랑스', '이탈리아', '미국', '영국']},
      {answer: ['혼자서 여유롭게 책도 읽고 산책도 한다', '보고 싶었던 전시회를 보러 간다', 
      '친구들과 요즘 SNS에서 핫한 장소에 놀러간다', '집에서 유튜브를 보면서 뒹굴거린다']},
      {answer: ['집에서 혼자 술을 마신다', '친구들과 만나 가볍게 한 잔 한다', 
      '친구들과 만나 취할 때까지 마신다', '그 날의 기분에 따라 다르게 행동한다']},
      {answer: ['집', '영화관', '놀이동산', '그 날의 기분에 따라 다른 장소']},
      {answer: ['집에서 콕 박혀서 유튜브와 함께한다', '한적한 산에 가서 글램핑을 한다', 
      '방방곡곡 맛집탐방을 간다', '핫한 클럽에 가서 춤추면서 논다']},
      {answer: ['알림을 끄고 확인하지 않는다', '들어가서 읽기만 하고 답장은 하지 않는다', 
      '하나하나 다 읽어보고 답장한다', '단톡방을 나간다']}
  ];
  const images = [
      {src: {question1}},
      {src: {question1}},
      {src: {question1}},
      {src: {question1}},
      {src: {question1}},
      {src: {question1}}
  ]

// SY: 화면에 나타난 질문의 순서에서 +1을 하는 함수
  function plusNumber() {
    if (selectedQuestion < 5) {
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
    if (selectedQuestion === 5){
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