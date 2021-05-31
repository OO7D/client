import React, { useState } from 'react';
import Styled from 'styled-components';

const EditWrap = Styled.div`
.inline-text_copy--active,
.inline-text_input--active {
  font: inherit;
  color: inherit;
  text-align: inherit;
  padding: 0;
  background: none;
  border: none;
  border-bottom: 1px dashed #666666;
}

.inline-text_copy--active {
  cursor: pointer;
}

.inline-text_copy--hidden,
.inline-text_input--hidden {
  display: none;
}

.inline-text_input--active {
  border-bottom: 1px solid #666666;
  text-align: left;
}
`;

const InlineTextEdit = props => {
  const [inputValue, setInputValue] = useState('');
  const [isInputActive, setIsInputActive] = useState(false);
  return (
    <EditWrap>
      <span className="inline-text">
        <span
          className={`inline-text_copy inline-text_copy--${!isInputActive} ? 'active' : 'rest'`}
        >
          {props.text}
        </span>
        <input
          className={`inline-text_input inline-text_input--${
            isInputActive ? 'active' : 'rest'
          }`}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          type="text"
        />
      </span>
    </EditWrap>
  );
};

export default InlineTextEdit;
