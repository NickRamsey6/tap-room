import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.brand}</h3>
      <h3>{props.price}</h3>
      <h3>{props.alcoholContent}</h3>
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
