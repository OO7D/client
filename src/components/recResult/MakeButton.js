import React, { useState } from 'react';
import Styled from 'styled-components';

const MakeButtonWrap = Styled.div`
  #buttonContainer {
    margin-top: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn {
    width: 130px;
    height: 50px;
    background-color: #CABFC5;
    font-size: 14px;
    color: white;
    border-radius: 7px;
    border: 1px solid #CABFC5;
    font-weight: bold;
  }
  .btn: focus {
    outline: none;
    border: none;
  }
  #btn1{
    margin-right: 19px;
  }
`;

const MakeButton = props => {
  const recMode = useState(props.recMode)[0];
  let _href;
  if (recMode === 'random') _href = '/recommendation/loading_random'; // SY: !서버! 여기에 onClick 함수 추가
  else _href = '/recommendation/loading_selected'; // SY: !서버! 
    return (
      <MakeButtonWrap>
        <div id='buttonContainer'>
          <a href={_href}><input type='button' className='btn' id='btn1' value='다시 추천받기'></input></a>
          <a href='/recommendation/cloth_select'><input type='button' className='btn' id='btn2' value='다시 선택하기'></input></a>
        </div>
      </MakeButtonWrap>
    );
};

export default MakeButton;
