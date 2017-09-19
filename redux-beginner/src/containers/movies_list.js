import React, {Component} from 'react';
import * as actions from './../actions';
import {connect} from 'react-redux'

class MoviesList extends Component {
  componentWillMount() {
    this
      .props
      .moviesList();
  }
  movies = (movies) => {
    if (movies) {
      return movies.map((movie, id) => {
        return (
          <h1 key={id}>{movie.name}</h1>
        )
      })
    }
  }
  render() {
    return (
      <div>
        {this.movies(this.props.movies)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {movies: state.movies}
}

export default connect(mapStateToProps, actions)(MoviesList);
