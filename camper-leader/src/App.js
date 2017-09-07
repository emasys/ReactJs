import React, {Component} from 'react';
import Table from './components/table';
import Nav from './components/nav';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <Nav/>
            <Table/>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
