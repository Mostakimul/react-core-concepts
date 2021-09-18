import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <ExternalUsers />
    </div>
  );
}

function User(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // console.log('Use Effect Inside!');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h3>External Users</h3>
      {users.map((user) => (
        <User name={user.name}></User>
      ))}
    </div>
  );
}

function Counter() {
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
}

export default App;
