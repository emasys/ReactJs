import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import './index.css';
import App from './components/app';
import Car from './components/car';
import reducers from './reducers'

const store = applyMiddleware()(createStore);
ReactDOM.render(
    <Provider store={store(reducers)}>
    <BrowserRouter>
        <div>
            <Route exact path='/' component={App}/>
            <Route path='/car/:id' component={Car}/>
        </div>
    </BrowserRouter>
</Provider>, document.getElementById('root'));