/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './RatingBar.css';

const RatingBar = props => {
  const mode = useState(props.mode)[0];
  return (
    <>
      {/* SY: div id를 ratingBar로 설정하여 모달창에서 확인 버튼 누를 시 id로 찾아서 내용 변경하게 함 */}
      <div id='ratingBar'>
        <div className='ratingBar'>
          <span className='score' id='leftScore'>1점</span>
          <input type="range" min="1" max="5" id="range" onChange={e => document.getElementById('rating').innerHTML = e.target.value + '점'}></input>
          <div className='score' id='rightScore'>5점</div>
        </div>
        <div className='ratingBar'>
          <div id='rating'>5점</div>
        </div> 
      </div>
    </>
  );
};

export default RatingBar;
