/**
 * Displays the current value of the calculator's computation or user input.
 * @param {string} value - The current value to be displayed in the calculator's screen.
 */
import PropTypes from 'prop-types';

function Display({ value }) {
  return (
    <div className='calculator-display'>
      <h1>{value}</h1>
    </div>
  );
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
