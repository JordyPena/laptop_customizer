import React from 'react'
import Total from "./Total";
import Summary from "../Components/Summary"

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});



function Cart(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => {
   return <Summary feature={feature} idx={idx} selected={props.selected}/>
  });

  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  );

  return (
    <section className="main__summary">
      <h2>Your Cart</h2>     
      {summary}
      <Total total={total}/>
    </section>
      

  
    
  )
}

export default Cart
