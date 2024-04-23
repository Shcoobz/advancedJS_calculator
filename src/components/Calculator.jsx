/**
 * The Calculator component manages the calculator layout and integrates the calculator logic with the display.
 * It renders the display and calculator buttons, and handles their interactions.
 */
import Display from './Display';
import useCalculatorLogic from '../utils/useCalculatorLogic';

function Calculator() {
  const { displayValue, sendNumberValue, addDecimal, handleOperator, resetAll } =
    useCalculatorLogic();

  return (
    <div className='calculator'>
      <Display value={displayValue} />
      <div className='calculator-buttons'>
        {['+', '-', '*', '/'].map((op) => (
          <button key={op} className='operator' onClick={() => handleOperator(op)}>
            {op}
          </button>
        ))}
        {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'].map((num) => (
          <button
            key={num}
            onClick={() => (num === '.' ? addDecimal() : sendNumberValue(num))}>
            {num}
          </button>
        ))}
        <button className='clear' onClick={resetAll}>
          C
        </button>
        <button className='equal-sign operator' onClick={() => handleOperator('=')}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
