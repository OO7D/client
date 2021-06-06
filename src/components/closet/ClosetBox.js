import React from 'react';
import Styled from 'styled-components';
// SY: 문제 --> radio가 두번씩 클릭됨, 왜냐하면 기존 radio의 visibility를 hidden으로 해 놔서 사실은 두 개인데, 하나인 것처럼 보이게 해 놨기 때문
// SY: 문제 --> 그래서 display를 none으로 하려고 했는데 그러면 아예 radio가 안 보임

const ClosetBoxWrap = Styled.div`
  width: 100px;
  height: 100px;
  background-color: #C4C4C4;
  border: 1px solid #C4C4C4;
  img {
    width: inherit;
    height: inherit;
  }
  input[type='radio'] {
    visibility: hidden;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  input[type='radio']:after {
    width: 20px;
    height: 20px;
    border-radius: 15px;
    top: -100px;
    left: 78px;
    position: relative;
    background-color: #d1d3d1;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }
  input[type='radio']:checked:after {
    width: 20px;
    height: 20px;
    border-radius: 15px;
    top: -100px;
    left: 78px;
    position: relative;
    background-color: black;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }
`;

const ClosetBox = ({ id, image, setSelected, mode }) => {
  return (
    <ClosetBoxWrap>
      <img src={image} />
      {mode ? (
        ''
      ) : (
        <input type="radio" name="select" onClick={() => setSelected(id)} />
      )}
    </ClosetBoxWrap>
  );
};

export default ClosetBox;
