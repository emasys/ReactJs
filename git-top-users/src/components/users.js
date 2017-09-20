import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './../style.css'

//Components
import Header from './header';
import Footer from './footer';
import Home from './home';
import User from './user';

class Users extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header/>
                    <Route exact path='/' component={Home}/>
                    <Route exact path="/user/:id" component={User}></Route>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default Users;