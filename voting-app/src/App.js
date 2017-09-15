import React, {Component} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Chart from './components/charts';
import Landing from './components/landing';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/charts' component={Chart}/>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;