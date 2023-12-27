import React from "react";

const Cart = (props) => {
  // let totalPopulation = 0;
  // for (let i = 0; i < props.cart.length; i++) {
  //   const country = props.cart[i];
  //   totalPopulation = totalPopulation + country.population;
  // }
  const totalPopulation = props.cart.reduce(
    (sum, country) => sum + country.population,
    0
  );
  return (
    <div>
      <h1> Cart</h1>
      <p>{props.cart.length}</p>
      <p>{totalPopulation}</p>
    </div>
  );
};

export default Cart;
