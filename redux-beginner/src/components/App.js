import React, {Component} from 'react';
import MoviesList from './../containers/movies_list';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <MoviesList/>
      </div>
    );
  }
}

export default App;
