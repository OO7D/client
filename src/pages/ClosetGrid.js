<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 1b5d98a8f69fc4d785a1c645190f4e4fd3eac2a6
import Styled from 'styled-components';
import ClosetBar from '../components/closet/ClosetBar';
import ClosetBox from '../components/closet/ClosetBox';
import sample1 from '../assets/image/sample1.jpg';
import deleteIcon from '../assets/delete.svg';
<<<<<<< HEAD
=======
import { withRouter } from 'react-router-dom';
>>>>>>> 1b5d98a8f69fc4d785a1c645190f4e4fd3eac2a6

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
<<<<<<< HEAD
  .delete {
=======
  .button {
>>>>>>> 1b5d98a8f69fc4d785a1c645190f4e4fd3eac2a6
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
<<<<<<< HEAD
`;

const ClosetGrid = () => {
=======

  .submit {
    font-size: 20px;
    color: white;
    background-color: #F79C43;
    width: 70px;
    height: 40px;
    border-radius: 7px;
    border: none;
  }
`;

const ClosetGrid = ({ match }) => {
  const mode = match.path === '/closet/grid' ? 'closet' : '';
  const [selected, setSelected] = useState(null);

  const imageList = [
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
    sample1,
  ];

>>>>>>> 1b5d98a8f69fc4d785a1c645190f4e4fd3eac2a6
  return (
    <>
      <ClosetBar />
      <ClosetGridWrap>
        <div className="box">
<<<<<<< HEAD
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
=======
          {imageList.map((image, index) => {
            return (
              <ClosetBox
                key={index}
                id={index}
                image={image}
                setSelected={setSelected}
                mode={mode}
              />
            );
          })}
        </div>
        <div className="button">
          {mode ? (
            <img src={deleteIcon} />
          ) : (
            <button
              className="submit"
              style={{
                backgroundColor: selected !== null ? '#F79C43' : 'gray',
              }}
            >
              선택
            </button>
          )}
>>>>>>> 1b5d98a8f69fc4d785a1c645190f4e4fd3eac2a6
        </div>
      </ClosetGridWrap>
    </>
  );
};

<<<<<<< HEAD
export default ClosetGrid;
=======
export default withRouter(ClosetGrid);
>>>>>>> 1b5d98a8f69fc4d785a1c645190f4e4fd3eac2a6
