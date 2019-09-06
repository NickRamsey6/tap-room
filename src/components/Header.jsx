import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Tap Room</h1>
      <Link to ="/">Home</Link> | <Link to="/newbeer">Add a Beer</Link>
    </div>
  );
}

export default Header;
