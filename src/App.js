import React from 'react';
import Button from './components/Button';
import Calculator from './components/calculator';
import Screen from './components/display';
import BtnBox from './components/ButtonB';
import Quote from './components/quote';

const btnVal = [
  ['AC', '+/-', '%', '÷'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  ['0', '.', '='],
];

function App() {
  return (
    <div>
      <Quote />
      <Calculator>
        <Screen />
        <BtnBox>

          {btnVal.flat().map((btn, index) => (
            <Button value={btn} key="0" name={`btn-${btn}-${index}`} />
          ))}
        </BtnBox>
      </Calculator>

    </div>
  );
}

export default App;
