import React from 'react';
import Styled from 'styled-components';
import ClosetBar from '../components/closet/ClosetBar';
import ClosetBox from '../components/closet/ClosetBox';
import sample1 from '../assets/image/sample1.jpg';
import deleteIcon from '../assets/delete.svg';

const ClosetGridWrap = Styled.div`
  width: 100vw;
  height: 150vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .box {
    height: 118vw;
    width: 90vw;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    row-gap: 10px;
    column-gap: 10px;
    overflow: scroll;
  }
  .delete {
    width: 90vw;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    & > img{
      width: 40px;
    }
  }
`;

const ClosetGrid = () => {
  return (
    <>
      <ClosetBar />
      <ClosetGridWrap>
        <div className="box">
          <ClosetBox image={sample1} />
          <ClosetBox image={sample1} />
          <ClosetBox image={sample1} />
          <ClosetBox image={sample1} />
          <ClosetBox image={sample1} />
          <ClosetBox image={sample1} />
          <ClosetBox image={sample1} />
          <ClosetBox image={sample1} />
          <ClosetBox image={sample1} />
          <ClosetBox image={sample1} />
          <ClosetBox image={sample1} />
          <ClosetBox image={sample1} />
          <ClosetBox image={sample1} />
          <ClosetBox image={sample1} />
          <ClosetBox image={sample1} />
        </div>
        <div className="delete">
          <img src={deleteIcon} />
        </div>
      </ClosetGridWrap>
    </>
  );
};

export default ClosetGrid;
