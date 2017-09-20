import React, {Component} from 'react';
import './App.css';

//COMPONENTS
import Users from './components/users';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Users/>
      </div>
    );
  }
}

export default App;
