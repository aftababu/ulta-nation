import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Country from "./components/Country/Country";


function App() {
  const [countries, setCountry] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  const HandleAddBtn = (country) => {
    console.log("clicked", country);
    const newCart = [...cart, country];
    setCart(newCart);
  };
  return (
    <div className="App">
      <p>{countries.length}</p>
      <Cart cart={cart}></Cart>

      {countries.map((country) => (
        <Country country={country} HandleAddBtn={HandleAddBtn}></Country>
      ))}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
