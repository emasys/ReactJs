export default function (state = null, action) {
    switch (action.type) {
        case 'MOVIES_LIST':
            return action.payload;
        default:
            return state
    }
}

import React, {Component} from 'react';
import * as actions from './../actions';
import {connect} from 'react-redux'

import './App.css';

class App extends Component {
    componentWillMount() {
        this
            .props
            .moviesList();
    }

    movies = (movies) => {
        if (movies) {
            return movies.map((movie) => {
                return (
                    <h1>{movie.name}</h1>
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

export default connect(mapStateToProps, actions)(App);
