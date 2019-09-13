import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import NewBeerForm from './NewBeerForm';
import Home from './Home';
import rainierBeer from '../assets/images/rainierbeer.png';
import nattySL from '../assets/images/nattySL.png';
import lombardLager from '../assets/images/lombardLager.jpg';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: [
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
      ]
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
  }

  handleAddingNewBeerToList(newBeer) {
    let newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.push(newBeer);
    this.setState({masterBeerList: newMasterBeerList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/taplist' render={()=><BeerList beerList={this.state.masterBeerList} />} />
          <Route path='/newbeer' render={()=><NewBeerForm onNewBeerCreation={this.handleAddingNewBeerToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}
export default App;
