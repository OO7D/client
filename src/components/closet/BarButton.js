import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const BarButtonWrap = Styled.div`
  select {
    width: 120px;
    height: 41px;
    font-size: 18px;
    color: white;
    background-color: #859594;
    border-radius: 13px;
    padding: 0 10px;
    margin: 0 4px;
  }
`;

const BarButton = ({ title, option }) => {
  return (
    <BarButtonWrap>
      <select>
        {option.map((value, index) => {
          return (
            <option key={index} name={title} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </BarButtonWrap>
  );
};

export default BarButton;
