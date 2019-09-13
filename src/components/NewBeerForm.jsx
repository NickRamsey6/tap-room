import React from 'react';
import PropTypes from 'prop-types';

function NewBeerForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;

  function handleAddingNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value});
    _name.value='';
    _brand.value='';
    _price.value='';
    _alcoholContent.value='';
  }
  return (
    <div className="new-form">
      <form onSubmit={handleAddingNewBeerFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Enter your beer name'
        ref={(input) => {_name = input;}}/>
        <br/>
        <br/>
        <input
          type='text'
          id='brand'
          placeholder='Enter your beer brand'
          ref={(input) => {_brand = input;}}/>
        <br/>
        <br/>
        <input
          type='number'
          id='price'
          placeholder='Enter your beer price'
          ref={(input) => {_price = input;}}/>
        <br/>
        <br/>
        <input
          type='number'
          id='alcoholContent'
          placeholder='Enter your beer alcohol content'
          ref={(input) => {_alcoholContent = input;}}/>
        <button type='submit'>Add!</button>
      </form>
    </div>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;
