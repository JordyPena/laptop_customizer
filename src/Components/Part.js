
import React from 'react'
import Option from "../Components/Option"





function Part(props) {
  
  const featureHash = props.name + '-' + props.idx;
  const options = props.featureChoice.map(item => {
   //console.log(item)
    return <Option key={item.name} item={item} selected={props.selected} name={props.name} change={props.change} />
  });

  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{props.name}</h3>
      </legend>
      {options}
    </fieldset>
    
  );

}

export default Part


