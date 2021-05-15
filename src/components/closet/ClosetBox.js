import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const ClosetBoxWrap = Styled.div`
  width: 100px;
  height: 100px;
  background-color: #C4C4C4;
  border: 1px solid #C4C4C4;
  img {
    width: inherit;
    height: inherit;
  }
`;

const ClosetBox = ({ image }) => {
  return (
    <ClosetBoxWrap>
      <img src={image} />
    </ClosetBoxWrap>
  );
};

ClosetBox.propTypes = {
  image: PropTypes.object,
};

export default ClosetBox;
