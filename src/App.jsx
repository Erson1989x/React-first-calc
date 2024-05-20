import './App.css'
import { useState } from 'react'

const App = () => {
  const [curentNumber, setCurentNumber] = useState(0); // 8 mai 20:35
  const [resetCount, setResetCount] = useState(0); // Set resetCount to 0

// Increase button
  const increaseNumber = () => {
    setCurentNumber(curentNumber + 1);
  };
// Decrease button
  const decreaseNumber = () => {
    setCurentNumber(curentNumber - 1);
  }
// Add new number with form
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newNumber =parseInt(formData.get('new-number'));
   setCurentNumber(newNumber);

    if (newNumber <= -100 || newNumber >= 100) {

    alert('Please enter a number between -100 and 100');
    
    } else {
    
    setCurentNumber(newNumber);
    
    }
  }
// Reset button
  const resetButton = () => {
    setCurentNumber(0);
    setResetCount(resetCount + 1);
  }
// Multiply button
  const multiplyButton = () => {
    setCurentNumber(curentNumber * 2);
  }
// Divide button
  const divideButton = () => {
    setCurentNumber(curentNumber / 2);
  }

return (
<div>
  <p>Number of resets: {resetCount}</p>
 <button className='action-button' onClick={increaseNumber} disabled = {curentNumber >= 10 ? true : false}> Increase </button>
 <button onClick={decreaseNumber} disabled = {curentNumber < 0 ? true : false}> Decrease </button>
 <button onClick={multiplyButton}> Multiply </button>
 <button onClick={divideButton}> Divide </button>
 <p className={curentNumber >= 5 ?'green-number' : ''}> {curentNumber} </p>

 <form onSubmit={handleSubmit}>
  <input type="text" name='new-number' />
 </form>
 {curentNumber !==0 && (
 <button onClick={resetButton}> Reset </button>
 )}
</div>
  );
}

export default App