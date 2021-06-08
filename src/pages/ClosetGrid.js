import React, { useState } from 'react';
import Styled from 'styled-components';
import ClosetBar from '../components/closet/ClosetBar';
import ClosetBox from '../components/closet/ClosetBox';
import deleteIcon from '../assets/delete.svg';
import { withRouter } from 'react-router-dom';

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
  .button {
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

const ClosetGrid = ({ imageList, match, history }) => {
  const mode = match.path === '/closet/grid' ? 'closet' : '';
  const [selected, setSelected] = useState(null);
  const [isDelete, setIsDelete] = React.useState(false);

  return (
    <>
      <ClosetBar />
      <ClosetGridWrap>
        <div className="box">
          {imageList.map((image, index) => {
            return (
              <ClosetBox
                key={index}
                id={index}
                image={image}
                setSelected={setSelected}
                mode={mode}
                isDelete={isDelete}
              />
            );
          })}
        </div>
        <div className="button">
          {mode ? (
            <img
              src={deleteIcon}
              onClick={() => {
                isDelete ? setIsDelete(false) : setIsDelete(true);
              }}
            />
          ) : (
            <button
              onClick={history.push('/recommendation/loading_selected')}
              className="submit"
              style={{
                backgroundColor: selected !== null ? '#F79C43' : 'gray',
              }}
            >
              선택
            </button>
          )}
        </div>
      </ClosetGridWrap>
    </>
  );
};

export default withRouter(ClosetGrid);
