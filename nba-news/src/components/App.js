import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

//components
import Header from './header'
import Footer from './footer'
import Home from './home'
import Teams from './teams'
import Team from './team'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/teams" component={Teams}/>
            <Route exact path="/team/:id" component={Team}/>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
