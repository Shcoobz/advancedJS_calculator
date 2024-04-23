/**
 * The root component of the React application that encapsulates all other components.
 * It serves as the main container for the Calculator component.
 */
import Calculator from './components/Calculator.jsx';

function App() {
  return (
    <div className='App'>
      <Calculator />
    </div>
  );
}

export default App;
