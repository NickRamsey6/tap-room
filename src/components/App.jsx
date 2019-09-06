import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={BeerList} />
      </Switch>
    </div>
  );
}

export default App;
