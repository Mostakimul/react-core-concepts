import './App.css';

function App() {
  const nayoks = [
    { name: 'Mostakimul', age: 24 },
    { name: 'Karim', age: 22 },
    { name: 'Mohit', age: 23 },
  ];

  return (
    <div className="App">
      <ul>
        {nayoks.map((nayok) => (
          <li>{nayok.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
