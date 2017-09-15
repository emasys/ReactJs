import React, {Component} from 'react';
import Lists from './components/lists';
import Header from './components/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <Header/>
          <Lists/>
        </div>
      </div>
    );
  }
}

export default App;