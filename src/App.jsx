import './App.css';
import React, { useState, useRef } from 'react';

function NumChangeOnClick() {
  const [currentNumber, setCurrentNumber] = useState(0);
  const numberBlockRef = useRef(null);

  const minusNumber = () => {
    setCurrentNumber(currentNumber - 1);
    checkValueOfNumber(currentNumber - 1);
  };

  const plusNumber = () => {
    setCurrentNumber(currentNumber + 1);
    checkValueOfNumber(currentNumber + 1);
  };

  const resetNumber = () => {
	setCurrentNumber(0);
	checkValueOfNumber(0);
  }


  function checkValueOfNumber(number) {
    if (number < 0) {
      numberBlockRef.current.style.color = 'red';
    } else if (number === 0) {
      numberBlockRef.current.style.color = 'black';
    } else {
      numberBlockRef.current.style.color = 'greenyellow';
    }
  }
  

  return (
    <>
		<div className='flex-container'>
			<span className='box box-minus' onClick={minusNumber}>-</span>
      		<span className='box-result' ref={numberBlockRef}>{currentNumber}</span>
      		<span className='box box-plus' onClick={plusNumber}>+</span>
		</div>
		<span className='box box-reset' onClick={resetNumber}>Reset</span>
    </>
  );
}

function App() {
  return (
    <NumChangeOnClick />
  );
}

export default App;