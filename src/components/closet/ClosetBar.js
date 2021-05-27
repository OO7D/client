import React from 'react';
import Styled from 'styled-components';
import BarButton from './BarButton';

const ClosetBarWrap = Styled.div`
  .bar {
    height: 75px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    overflow: scroll;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid black;
    box-sizing: border-box;
  }
  .bar::-webkit-scrollbar {
    display: none;
  }
`;

const closetList = [
  ['상의', '셔츠/블라우스', '니트/맨투맨', '반팔티셔츠'],
  ['하의', '긴바지', '반바지', '짧은치마', '긴치마'],
  ['계절', '봄/가을', '여름', '겨울'],
  ['미분류'],
];

const ClosetBar = () => {
  return (
    <ClosetBarWrap>
      <div className="bar">
        {closetList.map((value, index) => {
          return <BarButton key={index} title={value[0]} option={value} />;
        })}
      </div>
    </ClosetBarWrap>
  );
};

export default ClosetBar;
