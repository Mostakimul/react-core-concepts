import './App.css';

function App() {
  const products = [
    { name: 'Mobile', price: 150000 },
    { name: 'laptop', price: 15000 },
    { name: 'Camera', price: 120000 },
    { name: 'Watch', price: 10000 },
  ];
  return (
    <div className="App">
      {products.map((product) => (
        <Product name={product.name} price={product.price} />
      ))}
    </div>
  );
}

function Product(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  );
}

export default App;
