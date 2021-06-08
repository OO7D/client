import React from 'react';
import PropTypes from 'prop-types';

const Circle = ({ id, color }) => {
  return (
    <>
      <svg
        className="circle"
        id={id}
        width="100"
        height="100"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="150"
          cy="150"
          r="145"
          stroke={color}
          fill={color}
          strokeWidth="10"
        />
      </svg>
    </>
  );
};

Circle.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
};

export default Circle;
