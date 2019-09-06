import React from 'react';

function NewBeerForm(){
  return (
    <div className="new-form">
      <form>
        <input
          type='text'
          id='name'
          placeholder='Enter your beer name'/>
        <br/>
        <br/>
        <input
          type='text'
          id='brand'
          placeholder='Enter your beer brand'/>
        <br/>
        <br/>
        <input
          type='number'
          id='price'
          placeholder='Enter your beer price'/>
        <br/>
        <br/>
        <input
          type='number'
          id='alcoholContent'
          placeholder='Enter your beer alcohol content'/>
      </form>
    </div>
  );
}

export default NewBeerForm;
