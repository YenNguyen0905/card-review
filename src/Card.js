import React from "react";

function Card(props){
    return <div className="card">
    <img
       src={props.image} alt={props.alt}
    />
    <div className="texting">
    <h3>{props.name}</h3>
    <p className="description">{props.description}</p>
    </div>
    </div>
  }
  export default Card;