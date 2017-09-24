import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Components
import Header from './header';
import Footer from './footer';

//Containers
import Home from '../container/home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
