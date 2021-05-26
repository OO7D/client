/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import facebook from '../../assets/recResult/facebook.svg';
import twitter from '../../assets/recResult/twitter.svg';
import Kakao from './Layout';
import MakeButton from './MakeButton'
import './Sns.css';

const Sns = props => {
  const [mode, setMode] = useState(props.mode);
  if (mode === 'changed')
    return (
      <>
        <MakeButton></MakeButton>
        <div id='container'>
          <div id='_advertise'>만족하셨다면 이 서비스를 공유해 주세요!</div>
          <div id='snsContainer'>
            <Kakao></Kakao>
            <a target='_blank' rel='noreferrer' href='http://www.facebook.com/sharer/sharer.php?u=https://www.naver.com/'>
              <img id='facebook' src={facebook}></img>
            </a>
            <a target='_blank' rel='noreferrer' href='https://twitter.com/intent/tweet?text=너도 이거 써봐~!&url=https://www.naver.com/'>
              <img id='twitter' src={twitter}></img>
            </a>
          </div>
        </div>
      </>
    );
  else if (mode === 'original')
   return (
    <></>
   );
};

export default Sns;
