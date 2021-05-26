/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Styled from 'styled-components';

const ClothBoxSelectedWrap = Styled.div`
#outerBox{
  width: 130px;
  height: 197px;
  border: 1px solid black;
  background: #C4C4C4;
  border-radius: 7%;
}

#innerBox{
  width: 107px;
  height: 105px;
  border: 1px solid white;
  background: white;
  border-radius: 5%;
  margin: 11.5px;
}

#heartIcon{
  position: flex;
  float: right;
  margin-top: 6px;
  margin-right: 8px;
}

#clothNameBox{
  width: 94px;
  height: 20px;
  border-bottom: 1px solid white;
  text-align: center;
  margin-left: 18px;
}

#clothName{
  display: inline-block;
  margin-bottom: 2px;
  font-size: 11px;
  text-align: center;
  font-weight: bold;
}

#clothColor{
  display: inline-block;
  margin-left:24px;
  margin-top: 12px;
  font-weight: bold;
}

#category{
  width: 60px;
  height: 15px;
  margin-left: 60px;
  margin-top: -24px;
  font-size: 9px;
  font-weight: bold;
}

#season{
  width: 60px;
  height: 15px;
  margin-left: 60px;
  margin-top: 1px;
  font-size: 9px;
  font-weight: bold;
}
`;

const ClothBoxSelected = props => {
  const name = useState(props.name)[0];
  const category = useState(props.category)[0];
  const season = useState(props.season)[0];
  const color = useState(props.color)[0];
  const id = useState(props.id)[0];

  const setHeartColor = () => {
    const _icon = document.querySelectorAll('#heartIcon');
    if (id === 'leftBox'){
      if(_icon[0].getAttribute('fill') === 'none') _icon[0].setAttribute('fill', '#F79C43');
      else _icon[0].setAttribute('fill','none');
    }
    else{
      if(_icon[1].getAttribute('fill') === 'none') _icon[1].setAttribute('fill', '#F79C43');
      else _icon[1].setAttribute('fill','none');
    }
  }

  return (
    <ClothBoxSelectedWrap>
      <div id='outerBox'>
        <div id='innerBox'>
        <svg id='heartIcon' onClick={setHeartColor} width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.50052 5.0499C8.50015 5.07685 8.49997 5.10393 8.49997 5.13115C8.50034 5.10393 8.50052 5.07685 8.50052 5.0499ZM8.50052 5.0499C8.50029 -0.376916 1.00049 -0.349832 1.00049 5.13115C0.969241 6.60656 2.42539 10.2459 8.49997 13C14.5745 10.2459 16.0307 6.60656 15.9994 5.13115C16.0741 -0.349833 8.57464 -0.376916 8.50052 5.0499Z" stroke="#F79C43" strokeWidth="2"/>
        </svg>
        </div>
        <div id='clothNameBox'>
          <span id='clothName'>{name}</span>
        </div>
        <svg id='clothColor' width="18" height="18" viewBox="0 0 18 18" fill={color} xmlns="http://www.w3.org/2000/svg">
         <path d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 -1.8695e-06 13.9706 -1.8695e-06 9C-1.8695e-06 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z"/>
        </svg>
        <div id='category'>{category}</div>
        <div id='season'>{season}</div>
      </div>
    </ClothBoxSelectedWrap>
  );
};

export default ClothBoxSelected;
