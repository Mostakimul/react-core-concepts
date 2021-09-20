import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default Counter;
