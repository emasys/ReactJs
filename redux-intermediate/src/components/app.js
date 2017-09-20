import React, {Component} from 'react';
import Search from '../containers/search'
import Cars from '../containers/list_of_cars';

class App extends Component {
  render() {
    return (
      <div>
        <Search/>
        <Cars/>
      </div>
    );
  }
}

export default App;