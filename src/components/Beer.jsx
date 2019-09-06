import React from 'react';
import PropTypes from 'prop-types';
import rainierBeer from '../assets/images/rainierbeer.png'

function Beer(props){
  return (
    <div>
      <h3>Beer name: {props.name}</h3>
      <h3>Beer brand: {props.brand}</h3>
      <h3>Beer price: ${props.price}</h3>
      <h3>Alcohol Content: {props.alcoholContent}</h3>
      <img src={rainierBeer}/>
    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired
};

export default Beer;
