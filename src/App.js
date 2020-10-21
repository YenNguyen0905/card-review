import React from 'react';
import './App.css';
import Card from "./Card";
import data from "./data";

function createCard(cardData){
return (
  <Card
    key={cardData.id}
    image={cardData.image}
    alt={cardData.alt}
    name={cardData.name}
    description={cardData.description}
  />
)
}

function App() {
  return (
    <div className="container">
    <h1>Feed Back</h1>
    <div className="content">
      {data.map(createCard)};
    </div>
    </div>
    
  );
}

export default App;
