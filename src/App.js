import React, { Component } from 'react';
import CardList from './CardList';
import {items} from './db';
import Navbar from './Navbar';
import Footer from './Footer';


class App extends Component {

    constructor() {
    super()
    this.state = {
//  items: []
    }
  }


  render() {
    return (
      <div>
      <Navbar />
      <CardList items={items}/>
      <Footer />
      </div>
    );
  }
}

export default App;
