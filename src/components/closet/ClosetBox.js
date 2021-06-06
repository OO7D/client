import React from 'react';
import Styled from 'styled-components';

const ClosetBoxWrap = Styled.div`
  width: 100px;
  height: 100px;
  background-color: #C4C4C4;
  border: 1px solid #C4C4C4;
  img {
    width: inherit;
    height: inherit;
  }
  input {
    z-index: 2;
    position: relative; 
    top: -100px;
    left: 70px;
    width: 22px;
    height: 22px;
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
