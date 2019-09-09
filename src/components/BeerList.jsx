import React from 'react';
import Beer from './Beer';
import rainierBeer from '../assets/images/rainierbeer.png';
import nattySL from '../assets/images/nattySL.png';
import lombardLager from '../assets/images/lombardLager.jpg';

var masterBeerList = [
  {
    name: 'Rainier',
    brand: 'Rainier',
    price: 3,
    alcoholContent: 3,
    pic: rainierBeer
  },
  {
    name: 'Natty Light Strawberry Lemonade',
    brand: 'Natural Light',
    price: 4,
    alcoholContent: 4,
    pic: nattySL
  },
  {
    name: 'Lombard Lager',
    brand: 'Asher David Brewing',
    price: 2,
    alcoholContent: 5,
    pic: lombardLager
  },
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
          pic = {beer.pic}
          key = {index}/>
      )}
    </div>
  );
}

export default BeerList;
