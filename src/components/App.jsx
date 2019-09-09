import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import NewBeerForm from './NewBeerForm';
import Home from './Home';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/taplist' component={BeerList} />
        <Route path='/newbeer' component={NewBeerForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
