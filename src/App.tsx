import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(15);

  const addValue = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  const subtractValue = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addValue}>Increment</button>
      <button onClick={subtractValue}>Decrement</button>
    </div>
  )

}


export default App
