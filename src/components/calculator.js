import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Calculator = ({ children }) => {
  const [screen, setDisplay] = useState({ total: 0, next: null, operation: null });

  const handleButtonClick = (buttonName) => {
    const answer = calculate(screen, buttonName);
    setDisplay(answer);
  };

  const handleContainerClick = (event) => {
    if (event.target.matches('button')) {
      const buttonName = event.target.innerText;
      handleButtonClick(buttonName);
    }
  };

  const handleContainerKeyDown = (event) => {
    if (event.target.matches('button') && event.key === 'Enter') {
      const buttonName = event.target.innerText;
      handleButtonClick(buttonName);
    }
  };

  const { total, operation, next } = screen;

  return (
    <div
      className="container"
      onClick={handleContainerClick}
      onKeyDown={handleContainerKeyDown}
      role="grid"
      tabIndex="0"
    >
      <div className="answer" role="alert">
        {total}
        {operation}
        {next}
      </div>
      <div className="operations" role="rowgroup">
        <button type="button" role="gridcell" tabIndex="0">
          AC
        </button>
        <button type="button" role="gridcell" tabIndex="0">
          +/-
        </button>
        <button type="button" role="gridcell" tabIndex="0">
          %
        </button>
        <button
          type="button"
          role="gridcell"
          className="maths"
          tabIndex="0"
        >
          ÷
        </button>
        <button type="button" role="gridcell" tabIndex="0">
          7
        </button>
        <button type="button" role="gridcell" tabIndex="0">
          8
        </button>
        <button type="button" role="gridcell" tabIndex="0">
          9
        </button>
        <button
          type="button"
          role="gridcell"
          className="maths"
          tabIndex="0"
        >
          x
        </button>
        <button type="button" role="gridcell" tabIndex="0">
          4
        </button>
        <button type="button" role="gridcell" tabIndex="0">
          5
        </button>
        <button type="button" role="gridcell" tabIndex="0">
          6
        </button>
        <button
          type="button"
          role="gridcell"
          className="maths"
          tabIndex="0"
        >
          -
        </button>
        <button type="button" role="gridcell" tabIndex="0">
          1
        </button>
        <button type="button" role="gridcell" tabIndex="0">
          2
        </button>
        <button type="button" role="gridcell" tabIndex="0">
          3
        </button>
        <button
          type="button"
          role="gridcell"
          className="maths"
          tabIndex="0"
        >
          +
        </button>
        <button type="button" role="gridcell" className="zero" tabIndex="0">
          0
        </button>
        <button type="button" role="gridcell" tabIndex="0">
          .
        </button>
        <button
          type="button"
          role="gridcell"
          className="maths"
          tabIndex="0"
        >
          =
        </button>
        {children}
      </div>
    </div>
  );
};

Calculator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Calculator;
