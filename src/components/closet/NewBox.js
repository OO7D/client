import React from 'react';
import Styled from 'styled-components';
import sample1 from '../../assets/image/sample2.jpg';
import pencil from '../../assets/pencil.svg';

const NewBoxWrap = Styled.div`
  width: 256px;
  height: 490px;
  border-radius: 13px;
  background-color: #CABFC5;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .image {
    width: 230px;
    height: 230px;
    border-radius: 13px;
    margin-top: 13px;
    padding: 10px;
    background-color: white;
    box-sizing: border-box;
    & > img {
    width: 210px;
    height: 210px;
    }
  }

  .title {
    width: 230px;
    font-size: 23px;
    font-weight: bold;
    text-align: center;
    padding: 7px;
    border-bottom: 1px solid white;
    box-sizing: border-box;
  }

  .section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 180px;

    &__left {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-right: 10px;
      border-right: 1px solid white;
      font-size: 17px;
      color: white;
      height: 150px;

      & > p {
        margin: 13px 0;
      }
    }

    &__right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-left: 10px;
      height: 150px;
    }
  }

  .colors {
    display: flex;
    flex-direction: row;
    height: 50px;
    align-items: center;

    &--first,
    &--second {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      margin-right: 6px;
    }

    & > span {
      font-size: 14px;
      margin-right: 10px;
    }
  }

  .type, .weather {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
  }

  .edit {
    font-size: 17px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 220px;
    position: relative;
    top: -15px;

    & > img {
      width: 25px;
      height: 25px;
    }
  }
`;

const NewBox = () => {
  return (
    <NewBoxWrap>
      <div className="image">
        <img src={sample1} alt="" />
      </div>
      <div className="title">바지1</div>
      <div className="section">
        <div className="section__left">
          <p>색상</p>
          <p>분류</p>
          <p>계절</p>
        </div>
        <div className="section__right">
          <div className="colors">
            <div
              className="colors--first"
              style={{ backgroundColor: 'white' }}
            ></div>
            <span>92%</span>
            <div
              className="colors--second"
              style={{ backgroundColor: 'gray' }}
            ></div>
            <span>8%</span>
          </div>
          <p className="type">바지</p>
          <p className="weather">봄/가을</p>
        </div>
      </div>
      <div className="edit">
        수정
        <img src={pencil} alt="" />
      </div>
    </NewBoxWrap>
  );
};

export default NewBox;
