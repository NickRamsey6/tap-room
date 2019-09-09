import React from 'react';
import { Link } from 'react-router-dom';
import error from '../assets/images/error.gif';

function Error404(){
  return (
    <div className="error-message">
      <hr/>
      <h2>The page you are looking for does not exist!</h2>
      <h3>Would you like to return <Link to="/">Home</Link> instead?</h3>
      <img src={error}/>
      <style jsx>{`
          .error-message {
            text-align: center;
          }
            `}</style>
    </div>
  );
}

export default Error404;
