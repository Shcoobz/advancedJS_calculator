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
