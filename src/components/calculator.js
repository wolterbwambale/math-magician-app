import React from 'react';
import PropTypes from 'prop-types';

const Calculator = ({ children }) => (
  <div className="container">{children}</div>
);

Calculator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Calculator;
