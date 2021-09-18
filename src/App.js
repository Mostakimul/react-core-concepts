import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Hello world!!!</h2>
      <Person></Person>
    </div>
  );
}

// Create a component
function Person() {
  const personStyle = {
    backgroundColor: 'lightblue',
  };
  return (
    <div style={personStyle}>
      <h3>Name: Mostakimul Karim</h3>
      <p>Profession: Student</p>
    </div>
  );
}

export default App;
