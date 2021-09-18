import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Hello world!!!</h2>
      <Person name="Mostakimul Karim" profession="student"></Person>
    </div>
  );
}

// Create a component
function Person(props) {
  const personStyle = {
    backgroundColor: 'lightblue',
  };
  return (
    <div style={personStyle}>
      <h3>Name: {props.name}</h3>
      <p>Profession: {props.profession}</p>
    </div>
  );
}

export default App;
