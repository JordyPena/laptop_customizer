import React, { Component } from 'react'
import Part from "./Part";



// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

function BuildPc(props) {

  const features = Object.keys(props.features).map((feature, idx) => {
    return <Part key={`part${idx}`} featureChoice={props.features[feature]} name={feature} selected={props.selected} change={props.change} idx={idx}/>
    
  });
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
      
    </form>
  )
}

export default BuildPc


