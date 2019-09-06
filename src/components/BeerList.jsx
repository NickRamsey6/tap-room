import React from 'react';
import Beer from './Beer';

var masterBeerList = [
  {
    name: 'Rainier',
    brand: 'Rainier',
    price: 3,
    alcoholContent: 3
  }
];

function BeerList(){
  return (
    <div>
      <hr />
      {masterBeerList.map((beer, index) =>
        <Beer name = {beer.name}
          brand = {beer.brand}
          price = {beer.price}
          alcoholContent = {beer.alcoholContent}
          key = {index}/>
      )}
    </div>
  );
}

export default BeerList;
