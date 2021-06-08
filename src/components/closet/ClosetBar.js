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
  ['상의전체', '셔츠/블라우스', '니트/맨투맨', '티셔츠'],
  ['하의전체', '바지', '치마', '드레스/원피스'],
  ['계절전체', '봄/가을', '여름', '겨울'],
  [
    '색상전체',
    '빨강',
    '주황',
    '노랑',
    '연두',
    '초록',
    '하늘',
    '파랑',
    '보라',
    '분홍',
    '갈색',
    '흰색',
    '회색',
    '검정',
  ],
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
