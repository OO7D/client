import React, { useState } from 'react';
import Styled from 'styled-components';

const SelectedRecTextWrap = Styled.div`
  #container{
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center; 
  }
  .line{
    width: 360px;
    height: 30px;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
  }
  #line1{
    margin-top: 51px;
  }
  #line2{
    margin-top: 20px;
    margin-bottom: -8px;
  }
  #line3{
    margin-bottom: 29px;
  }
  ._props{
    color: #859594;
  }
`;

const SelectedRecText = props => {
  const season = useState(props.season)[0];
  const look = useState(props.look)[0];
  const name = useState(props.name)[0];
  const style = useState(props.style)[0];
  const selectedClothName = useState(props.selectedClothName)[0];
  return (
    <SelectedRecTextWrap>
      <div id='container'>
        <div className='line' id='line1'>오늘은 <span className='_props'>{season}</span>용 
          <span className='_props'> {look}</span>에 어울리는 날씨예요!
        </div>
        <div className='line' id='line2'>평소 <span className='_props'>{name}</span>님이 선호하는 
          <span className='_props'> {style}</span> 스타일과 색상 조합으로
        </div>
        <div className='line' id='line3'>
          <span className='_props'> {selectedClothName} </span>에 어울리게 코디해봤어요! 마음에 드시나요?</div>
      </div>
    </SelectedRecTextWrap>
  );
};

export default SelectedRecText;