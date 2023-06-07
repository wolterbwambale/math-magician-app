import React from 'react';
import PropTypes from 'prop-types';

const getStyleName = (btn) => {
  const className = {
    '=': 'option',
    '-': 'option',
    '+': 'option',
    x: 'option',
    '÷': 'option',
    0: 'zero',
  };
  return className[btn];
};

const Button = ({ value }) => (
  <button type="button" className={`${getStyleName(value)} button`}>{value}</button>
);

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Button;
