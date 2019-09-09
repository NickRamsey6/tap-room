import React from 'react';
import PropTypes from 'prop-types';


function Beer(props){
  var beerComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    color: 'red',
  }
  return (
    <div style = {beerComponentStyles}>
      <h3>Beer name: {props.name}</h3>
      <h3>Beer brand: {props.brand}</h3>
      <h3>Beer price: ${props.price}</h3>
      <h3>Alcohol Content: {props.alcoholContent}%</h3>
      <img className='tap-pic'src={props.pic}/>
        <style jsx>{`
            .tap-pic {
              display: block;
              height: 20%;
              width: 20%
            }
            `}</style>
    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pic: PropTypes.string.isRequired,
};

export default Beer;
