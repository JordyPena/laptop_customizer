import React from "react"

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

function Option(props) {
  //console.log(props.change,"change happened")
   const itemHash = slugify(JSON.stringify(props.item.name)); 
   //console.log(props.item, "option worked")
   
   console.log(slugify(props.name))
   return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(props.name)}
          checked={props.item.name === props.selected[props.name].name}
          onChange={e => {props.change(props.name, props.item)}}
        />
        <label htmlFor={itemHash} className="feature__label">
          {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
        </label>
      </div>
    );
}

export default Option