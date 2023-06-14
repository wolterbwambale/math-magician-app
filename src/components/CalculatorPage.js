import React from 'react';
import Calculator from './calculator';
import BtnBox from './ButtonB';
import Button from './Button';
import Screen from './display';
import Lets from './Lets';

const btnVal = [
  ['AC', '+/-', '%', '÷'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  ['0', '.', '='],
];

function CalculatorPage() {
  return (
    <>
      <Lets />
      <Calculator>
        <Screen />
        <BtnBox>
          {btnVal.flat().map((btn, index) => (
            <Button value={btn} key="0" name={`btn-${btn}-${index}`} />
          ))}
        </BtnBox>
      </Calculator>
    </>
  );
}

export default CalculatorPage;
