 import React from "react"
 
// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

 function Summary(props) {
   const featureHash = props.feature + '-' + props.idx;
    const selectedOption = props.selected[props.feature];
  
    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{props.feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
 }
 

    export default Summary