/**
 * Custom React hook that encapsulates the state and logic for a calculator.
 * It manages the state for display value, operations, and inputs.
 * @returns {Object} An object containing the display value and functions for modifying it based on user interactions.
 */
import { useState } from 'react';
import { calculate } from './calculatorFunctions';

function useCalculatorLogic() {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [awaitingNextValue, setAwaitingNextValue] = useState(false);

  const sendNumberValue = (number) => {
    if (awaitingNextValue) {
      setDisplayValue(number);
      setAwaitingNextValue(false);
    } else {
      setDisplayValue(displayValue === '0' ? number : displayValue + number);
    }
  };

  const addDecimal = () => {
    if (awaitingNextValue) return;
    if (!displayValue.includes('.')) {
      setDisplayValue(`${displayValue}.`);
    }
  };

  const handleOperator = (nextOperator) => {
    const value = parseFloat(displayValue);
    if (operator && awaitingNextValue) {
      setOperator(nextOperator);
      return;
    }
    if (firstValue == null) {
      setFirstValue(value);
    } else if (operator) {
      const result = calculate[operator](firstValue, value);
      setDisplayValue(String(result));
      setFirstValue(result);
    }
    setAwaitingNextValue(true);
    setOperator(nextOperator);
  };

  const resetAll = () => {
    setDisplayValue('0');
    setFirstValue(null);
    setOperator(null);
    setAwaitingNextValue(false);
  };

  return {
    displayValue,
    sendNumberValue,
    addDecimal,
    handleOperator,
    resetAll,
  };
}

export default useCalculatorLogic;
