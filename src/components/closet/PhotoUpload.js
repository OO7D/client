import React from 'react';
import styled from 'styled-components';

const PhotoUpload = ({ onChangeFunc }) => {
  return (
    <>
      <StyledPhotoInput
        type="file"
        id="ImageUpload"
        name="ImageUpload"
        accept="image/*"
        onChange={onChangeFunc}
      />
      <LabelWrap>
        <label htmlFor="ImageUpload">
          <div className="ImageUpload__box"></div>
        </label>
      </LabelWrap>
    </>
  );
};

const StyledPhotoInput = styled.input`
  border-style: none;
  width: 1px;
  height: 1px;
  opacity: 0;
  z-index: -1;
  outline: none;
  position: absolute;

  :focus {
    outline: none;
    cursor: pointer;
  }

  & + label {
    outline: none;
  }
`;

const LabelWrap = styled.div`
  position: absolute;

  .ImageUpload {
    &__box {
      width: 150px;
      height: 140px;
      z-index: 2;
    }
  }
`;

// const StyledPhotoPreview = styled.div`
//   .photo {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 151px;
//     height: 192px;
//     background-color: white;
//     border: 1px solid black;
//   }
//   .photo__uploaded {
//     width: 151px;
//     height: 192px;
//     &:hover {
//       cursor: pointer;
//     }
//   }
//   .photo__upload {
//     position: absolute;
//     z-index: 1;
//     width: 151px;
//     height: 192px;
//     background-color: rgba(0, 0, 0, 0.07);
//     font-size: 12px;
//     & > p {
//       margin-top: 145px;
//       margin-left: 45px;
//     }
//     &:hover {
//       cursor: pointer;
//     }
//   }
// `;

export default PhotoUpload;
