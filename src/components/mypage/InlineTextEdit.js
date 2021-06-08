import React, { useState } from 'react';
import Styled from 'styled-components';
import Pencil from '../../assets/pencil.svg';

const ContainerWrapper = Styled.div`
  * {
    box-sizing: content-box;
    color: black;
  }
  #box {
      margin: 36px auto 0 auto;
      width: 320px;
      height: 120px;
      border: 1px solid #859594;
      border-radius: 12px;
      display: flex;
      flex-direction: row;
      #circle {
          margin: 14px 26px 14px 23px;
          width: 93px;
          height: 93px;
          border-radius: 50%;
          border: none;
          background-color: #C4C4C4;
      }
      #description-container {
        width: 140px;
        margin: 24px auto 10px auto;
        font-size: 22px;
        img {
          height: 28px;
        }
        button {
          border: none;
          background-color: transparent;
          img {
            vertical-align: top;
          }
        }
        input[type='text'] {
          border: none;
          width: 100px;
          display: inline;
          font-weight: 500;
          font-size: 22px;
          overflow: auto;
          text-align: center;
        }
        #title {
          display: flex;
          justify-content: space-around;
          text-align: center;
          #name {
            overflow: auto;
            display: inline-block;
            width: 100px;
            font-weight: bold;
            font-size: 22px;
          }
          button {
            outline: none;
          }
        }
        #line {
          width: 154px;
          height: 1px;
          background-color: #CABFC5;
        }
        #description > p {
          margin-top: 10px;
          text-align: center;
          font-size: 12px;
          color: #859594;
        }
      }
  }
`;

const InlineTextEdit = () => {
  let userState = [{ name: '상민' }, { age: '20대' }, { gender: '남성' }];
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(userState[0].name);
  const handleChange = e => {
    setText(e.target.value);
    userState[0]['name'] = e.target.value;
  };
  return (
    <ContainerWrapper>
      <div id="box">
        <div id="circle"></div>
        <div id="description-container">
          <div id="title">
            {editMode ? (
              <input
                type="text"
                maxLength="5"
                value={text}
                onChange={e => handleChange(e)}
              />
            ) : (
              <div id="name" value={userState[0].name}>
                {text}
              </div>
            )}
            <button>
              {editMode ? (
                <h5
                  style={{ fontWeight: 'bold' }}
                  onClick={() => setEditMode(!editMode)}
                >
                  저장
                </h5>
              ) : (
                <img
                  id="pencil"
                  src={Pencil}
                  alt="Pencil"
                  onClick={() => setEditMode(!editMode)}
                ></img>
              )}
            </button>
          </div>
          <div id="line"></div>
          <div id="description">
            <p>
              {userState[0].age}대 {userState[0].gender}
            </p>
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default InlineTextEdit;

// 입력하고 있지 않을 때 text를 보여준다.
// 텍스트를 누르면 클릭할 수 있게 해주고, enter 누르면 세이브한다.
// esc키를 누르면 save하지 않고 원래대로 돌아간다.
// 바깥을 누르면 save된다.
